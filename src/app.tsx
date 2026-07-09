import * as React from "react"
import { createRoot } from "react-dom/client"
import { useState, useEffect } from "react"
import { Toaster } from "sonner"
import "./index.css"

import PaymentPage, { calculateCartGrandTotal } from "./components/Payment"
import ActionNumpad from "./components/Calculator"
import CartSection from "./components/OrderPanel"
import ProductGrid from "./components/ProductGrid"
import MainHeader from "./components/MainHeader"
import LoginModal from "./components/LoginModal" // New Component
import TryOutModal from "./components/TryOutModal"
import CustomerSelectModal from "./components/CustomerSelectModal"
import SessionGate from "./components/SessionGate"
import QuotationPreviewModal from "./components/QuotationPreviewModal"
import SettingsPanel, { PanelPosition } from "./components/SettingsPanel"
import LandingScreen from "./components/LandingScreen"

import { clickedContainer } from "./Types/ClickedContainer"
import { UpdatedProductResponse } from "./Types/Product"
import { CartItem } from "./Types/CartItem"
import { ClientResponse } from "./Types/Client"
import { SellerSession, PosSession, getProducts, getClients, createDevis, generateDocumentNumber } from "./lib/api"
import { toast } from "sonner"

const ANONYMOUS_CUSTOMER_CODE = 'CLI-ANON-000';

const TAX_RATE = 0.18;

const PANEL_POSITION_KEY = 'posPanelPosition';

const App: React.FC = () => {
  // --- AUTH STATES ---
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [sellerName, setSellerName] = useState<string>("Session Fermée");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isTryOutModalOpen, setIsTryOutModalOpen] = useState<boolean>(false);
  const [session, setSession] = useState<SellerSession | undefined>();
  const [sessionStarted, setSessionStarted] = useState<boolean>(false);
  const [posSession, setPosSession] = useState<PosSession | undefined>();

  // --- SETTINGS STATES ---
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [panelPosition, setPanelPosition] = useState<PanelPosition>(
    () => (localStorage.getItem(PANEL_POSITION_KEY) as PanelPosition) || 'left'
  );

  const handleChangePanelPosition = (position: PanelPosition) => {
    setPanelPosition(position);
    localStorage.setItem(PANEL_POSITION_KEY, position);
  };

  useEffect(() => {
    const stored = localStorage.getItem("seller")
    if (stored) {
      const parsed: SellerSession = JSON.parse(stored);
      setSession(parsed);
      setSellerName(parsed.username);
      setIsLoggedIn(true);
    }
  }, [])

  // --- POS STATES ---
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<UpdatedProductResponse[]>([]);
  const [clickedContainer, setClickedContainer] = useState<clickedContainer | undefined>(undefined);
  const [showPayment, setShowPayment] = useState<boolean>(false);
  const [selectedCustomer, setSelectedCustomer] = useState<ClientResponse | null>(null);
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState<boolean>(false);
  const [isQuotationModalOpen, setIsQuotationModalOpen] = useState<boolean>(false);
  const [quotation, setQuotation] = useState<any>(null);
  const [isGeneratingQuotation, setIsGeneratingQuotation] = useState<boolean>(false);

  // Load real products for the org once we have a session (fresh login or restored from storage)
  useEffect(() => {
    if (!session) return;
    getProducts(session)
      .then(setProducts)
      .catch((err) => {
        console.error("Failed to load products", err);
        toast.error("Failed to load products.");
      });
  }, [session]);

  // --- CALCULATION LOGIC (Including Discounts & Taxes) ---
  const subtotalAfterDiscounts = cartItems.reduce((sum, item) => {
    const basePrice = item.unitPrice ?? item.prixVente ?? 0;
    const discountFactor = 1 - (item.discountPercentage / 100);
    return sum + (basePrice * discountFactor * item.quantity);
  }, 0);

  const taxes = Math.round(subtotalAfterDiscounts * TAX_RATE);
  const finalTotal = Math.round(subtotalAfterDiscounts + taxes);

  // --- HANDLERS ---
  const handleLoginSuccess = (name: string) => {
    const stored = localStorage.getItem("seller");
    if (stored) {
      const parsed: SellerSession = JSON.parse(stored);
      setSession(parsed);
      // Kept separately from "seller" so logging out (which clears "seller")
      // doesn't lose track of which org this terminal belongs to — PIN login
      // needs this even when nobody is currently signed in.
      if (parsed.organizationId) {
        localStorage.setItem("terminalOrganizationId", parsed.organizationId);
      }
    }
    setSellerName(name);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleTryOutSuccess = (parsed: SellerSession) => {
    setSession(parsed);
    if (parsed.organizationId) {
      localStorage.setItem("terminalOrganizationId", parsed.organizationId);
    }
    setSellerName(parsed.username);
    setIsLoggedIn(true);
    setIsTryOutModalOpen(false);
  };

  const handleGenerateQuotation = async () => {
    if (!session) return;
    if (cartItems.length === 0) {
      toast.error('Add products to the cart first.');
      return;
    }
    setIsGeneratingQuotation(true);
    try {
      let client = selectedCustomer;
      if (!client) {
        const clients = await getClients(session);
        client = clients.find((c: ClientResponse) => c.codeClient === ANONYMOUS_CUSTOMER_CODE) ?? null;
        if (!client) {
          toast.error("No customer selected, and no 'Anonymous Customer' found for this organization.");
          return;
        }
      }

      const now = new Date();
      const validUntil = new Date(now.getTime());
      validUntil.setDate(validUntil.getDate() + 30);

      const lignesDevis = cartItems.map((item) => {
        const unitPrice = item.unitPrice ?? item.prixVente ?? 0;
        const lineTotal = unitPrice * (1 - (item.discountPercentage || 0) / 100) * item.quantity;
        return {
          quantite: item.quantity,
          description: item.nomProduit,
          debit: lineTotal,
          credit: 0,
          idProduit: item.idProduit,
          nomProduit: item.nomProduit,
          prixUnitaire: unitPrice,
          montantTotal: lineTotal,
        };
      });

      const montantHT = lignesDevis.reduce((acc, l) => acc + l.montantTotal, 0);
      const montantTTC = calculateCartGrandTotal(cartItems);
      const numeroDevis = await generateDocumentNumber(session, 'DEVIS', montantTTC > montantHT);

      const payload = {
        numeroDevis,
        dateCreation: now.toISOString(),
        dateValidite: validUntil.toISOString(),
        type: 'VENTE',
        // A POS-generated quotation is handed to the customer immediately —
        // it's already "sent", not a draft awaiting seller review.
        statut: 'ENVOYE',
        idClient: client.idClient,
        nomClient: client.raisonSociale || client.username,
        adresseClient: client.adresse,
        emailClient: client.email,
        telephoneClient: client.telephone,
        lignesDevis,
        montantHT,
        montantTVA: montantTTC - montantHT,
        montantTTC,
        montantTotal: montantTTC,
        finalAmount: montantTTC,
        applyVat: true,
        devise: 'XAF',
        organizationId: session.organizationId,
        agencyId: session.agencyId,
        createdBy: session.id,
      };

      const created = await createDevis(session, payload);
      setQuotation(created);
      setIsQuotationModalOpen(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to generate quotation.');
    } finally {
      setIsGeneratingQuotation(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("seller");
    setSession(undefined);
    setIsLoggedIn(false);
    setSessionStarted(false);
    setPosSession(undefined);
    setSellerName("Session Fermée");
    setCartItems([]); // Optional: Clear cart on logout for security
    setProducts([]);
    setSelectedCustomer(null);
    toast.success("Signed out.");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden text-[#03045e] font-sans selection:bg-[#ECF3FA]">
      <Toaster
        position="top-right"
        richColors
        toastOptions={{ style: { borderRadius: '12px' } }}
      />

      {/* HEADER: Receives seller name and auth status */}
      <MainHeader
        sellerName={sellerName}
        stationName="Caisse Principale A"
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <div className="flex flex-1 overflow-hidden bg-[#F6F8FC]">
        {!isLoggedIn ? (
          /* LANDING STATE: marketing/overview screen with a CTA into the login modal */
          <LandingScreen
            onSignIn={() => setIsLoginModalOpen(true)}
            onTryOut={() => setIsTryOutModalOpen(true)}
          />
        ) : !sessionStarted ? (
          /* SESSION GATE: must start (or be scheduled) a session before reaching the dashboard */
          <SessionGate
            session={session!}
            onSessionStarted={(started) => { setPosSession(started); setSessionStarted(true); }}
            onLogout={handleLogout}
          />
        ) : showPayment ? (
          /* FULL SCREEN PAYMENT VIEW */
          <PaymentPage
            total={finalTotal}
            onBack={() => setShowPayment(false)}
            cartItems={cartItems}
            session={session}
            posSession={posSession}
            selectedCustomer={selectedCustomer}
            onPaymentComplete={() => { setCartItems([]); setSelectedCustomer(null); }}
          />
        ) : (
          /* STANDARD POS VIEW (Only visible when logged in) */
          <>
            {/* CART + CONTROLS PANEL — side controlled by Settings > Cart & Numpad Position */}
            <div className={`w-[450px] flex flex-col bg-white shadow-xl z-20 ${
              panelPosition === 'left' ? 'order-1 border-r' : 'order-2 border-l'
            } border-[#E5E7EB]`}>
              <CartSection
                cartItems={cartItems}
                setCartItems={setCartItems}
                setClickedContainer={setClickedContainer}
              />

              {/* Selected Customer Bar */}
              {selectedCustomer && (
                <div className="px-4 py-2 bg-[#ECF3FA] border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-[#1F47E6] truncate">
                    Client: {selectedCustomer.raisonSociale || selectedCustomer.username}
                  </span>
                  <button
                    onClick={() => setSelectedCustomer(null)}
                    className="text-[10px] font-black uppercase text-[#99a1af] hover:text-red-500"
                  >
                    Retirer
                  </button>
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="grid grid-cols-5 bg-white text-[#99a1af] text-[9px] uppercase font-black text-center border-t border-[#E5E7EB]">
                <button className="py-4 border-r border-[#E5E7EB] hover:bg-[#F6F8FC] hover:text-[#1F47E6]">Refund</button>
                <button
                  onClick={() => setIsCustomerModalOpen(true)}
                  className={`py-4 border-r border-[#E5E7EB] hover:bg-[#F6F8FC] hover:text-[#1F47E6] ${selectedCustomer ? 'text-[#1F47E6]' : 'text-[#03045e]'}`}
                >
                  Customer
                </button>
                <button className="py-4 border-r border-[#E5E7EB] hover:bg-[#F6F8FC] hover:text-[#1F47E6]">Note</button>
                <button
                  onClick={handleGenerateQuotation}
                  disabled={isGeneratingQuotation}
                  className="py-4 border-r border-[#E5E7EB] hover:bg-[#F6F8FC] hover:text-[#1F47E6] disabled:opacity-50"
                >
                  {isGeneratingQuotation ? '…' : 'Quotation'}
                </button>
                <button className="py-4 hover:bg-[#F6F8FC] hover:text-[#1F47E6]">Receipt</button>
              </div>

              <ActionNumpad
                clickedContainer={clickedContainer}
                showPayment={showPayment}
                setShowPayment={setShowPayment}
              />
            </div>

            {/* PRODUCTS GRID */}
            <div className={`flex-1 bg-[#F6F8FC] ${panelPosition === 'left' ? 'order-2' : 'order-1'}`}>
              <ProductGrid products={products} setCartItems={setCartItems} setClickedContainer={setClickedContainer} />
            </div>
          </>
        )}
      </div>

      {/* SETTINGS PANEL LAYER */}
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        panelPosition={panelPosition}
        onChangePanelPosition={handleChangePanelPosition}
      />

      {/* LOGIN MODAL LAYER */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
        clickedContainer={clickedContainer}
        setClickedContainer={setClickedContainer}
      />

      {/* TRY OUT MODAL LAYER */}
      <TryOutModal
        isOpen={isTryOutModalOpen}
        onClose={() => setIsTryOutModalOpen(false)}
        onSuccess={handleTryOutSuccess}
        clickedContainer={clickedContainer}
        setClickedContainer={setClickedContainer}
      />

      {/* CUSTOMER SELECT MODAL LAYER */}
      <CustomerSelectModal
        isOpen={isCustomerModalOpen}
        onClose={() => setIsCustomerModalOpen(false)}
        session={session}
        selectedCustomer={selectedCustomer}
        onSelect={setSelectedCustomer}
      />

      {/* QUOTATION PREVIEW MODAL LAYER */}
      <QuotationPreviewModal
        isOpen={isQuotationModalOpen}
        onClose={() => setIsQuotationModalOpen(false)}
        quotation={quotation}
        session={session}
      />

      {/* MODAL ACTION NUMPAD FOR LOGIN / OTHER INPUTS */}
      {(isLoginModalOpen || isTryOutModalOpen) && clickedContainer && (
        <div className="fixed bottom-0 left-0 right-0 z-[110] border-t border-[#E5E7EB] shadow-2xl p-4 animate-in slide-in-from-bottom duration-300">
          <div className="max-w-md mx-auto">
            <ActionNumpad
              clickedContainer={clickedContainer}
              onlyPad={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById("root")!)
root.render(<React.StrictMode><App /></React.StrictMode>)