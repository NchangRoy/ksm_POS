import React, { useState, useMemo } from 'react';
import { Search, Home, ChevronRight, Info } from 'lucide-react';
import { UpdatedProductResponse, produits } from '../Types/Product';
import { CartItem } from '../Types/CartItem';

import { clickedContainer } from '../Types/ClickedContainer';

interface ProductGridProps {
  products?: UpdatedProductResponse[];
  setCartItems?: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setClickedContainer: (container: clickedContainer | null) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ setCartItems, setClickedContainer }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = useMemo(() => {
    const cats = produits.map(p => p.categorie || 'Autres');
    return ['Tous', ...Array.from(new Set(cats))];
  }, []);

  const filteredProducts = useMemo(() => {
    return produits.filter((product) => {
      const matchesSearch =
        product.nomProduit?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.reference?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'Tous' || product.categorie === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex-1 flex flex-col bg-[#F6F8FC] h-full overflow-hidden">
      {/* HEADER */}
      <header className="p-4 bg-white border-b border-[#E5E7EB] flex justify-between items-center">
        <div className="flex items-center gap-2 text-[#03045e]">
          <Home size={18} />
          <ChevronRight size={14} className="text-[#99a1af]" />
          <span className="font-bold text-sm">Produits</span>
        </div>

        <div className="relative w-80 group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af] group-focus-within:text-[#1F47E6] transition-colors" size={16} />
          <input
            value={searchQuery}
            onFocus={() => {
              setClickedContainer({
                type: 'input',
                data: searchQuery,
                setData: setSearchQuery
              });
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setClickedContainer({
                type: 'input',
                data: e.target.value,
                setData: setSearchQuery
              });
            }}
            className="w-full pl-10 pr-4 py-2 bg-[#F6F8FC] border border-transparent rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#1F47E6]/30 focus:shadow-[0_0_0_4px_rgba(31,71,230,0.1)] transition-all"
            placeholder="Nom ou référence..."
          />
        </div>
      </header>

      {/* CATEGORIES */}
      <div className="bg-white px-4 py-3 flex gap-2 overflow-x-auto border-b border-[#E5E7EB]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-sm ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#03045e] to-[#1F47E6] text-white shadow-[#1F47E6]/30 border border-transparent scale-105'
                : 'bg-white text-[#03045e] hover:bg-blue-50 border border-[#E5E7EB] hover:border-[#1F47E6]/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-y-auto flex-1">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.idProduit}
            product={product}
            handleClick={(product: UpdatedProductResponse) => {
              setCartItems?.((prev) => {
                const index = prev.findIndex((p) => p.idProduit === product.idProduit);

                if (index > -1) {
                  const updated = [...prev];
                  updated[index] = {
                    ...updated[index],
                    quantity: updated[index].quantity + 1,
                  };
                  return updated;
                }

                return [
                  ...prev,
                  {
                    ...product,
                    quantity: 1,
                    unitPrice: product.prixVente ?? 0,
                    discountPercentage: 0,
                    total: product.prixVente ?? 0,
                  },
                ];
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: UpdatedProductResponse; handleClick: (product: UpdatedProductResponse) => void }> = ({
  product,
  handleClick,
}) => {
  const isOutOfStock = product.stockQuantity <= 0;

  return (
    <div
      onClick={() => !isOutOfStock && handleClick(product)}
      className={`relative h-64 bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-[1.25rem] overflow-hidden flex flex-col cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#1F47E6]/10 hover:border-[#1F47E6]/40 hover:-translate-y-1 transition-all duration-300 group ${
        isOutOfStock ? 'opacity-60 grayscale-[0.5] cursor-not-allowed' : ''
      }`}
    >
      {/* Product Image */}
      <div className="h-32 w-full bg-gradient-to-br from-[#F6F8FC] to-white flex items-center justify-center overflow-hidden border-b border-slate-100 p-2">
        {product.photo ? (
          <img src={product.photo} alt={product.nomProduit} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-sm" />
        ) : (
          <span className="text-4xl opacity-50 group-hover:scale-110 transition-transform duration-300">📦</span>
        )}

        {isOutOfStock && (
          <div className="absolute inset-0 bg-[#03045e]/40 flex items-center justify-center">
            <span className="text-white font-black text-[10px] uppercase bg-red-500 px-3 py-1 rounded-full shadow-lg">
              Rupture
            </span>
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-3 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xs font-black text-[#03045e] line-clamp-1 uppercase tracking-tight">
            {product.nomProduit}
          </h3>

          <div className="flex justify-between items-center mt-1">
            <span className="text-[10px] text-[#99a1af] font-bold truncate">
              Ref: {product.reference || 'N/A'}
            </span>

            <span className="text-[9px] px-2 py-0.5 bg-[#ECF3FA] text-[#1F47E6] rounded-md font-black uppercase">
              {product.uom || 'Unit'}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-2 pt-2 border-t border-dashed border-[#E5E7EB] flex justify-between items-end">
          <div>
            <p className="text-[#1F47E6] font-black text-sm leading-none">
              {product.prixVente?.toLocaleString()} <span className="text-[10px]">FCFA</span>
            </p>

            <p className={`text-[9px] font-black mt-1.5 uppercase tracking-tighter ${
                product.stockQuantity < 5 ? 'text-orange-500' : 'text-[#03045e]/50'
              }`}
            >
              Stock: {product.stockQuantity}
            </p>
          </div>

          <div className="bg-[#F6F8FC] p-1 rounded-full text-[#99a1af] group-hover:text-[#1F47E6] transition-colors">
            <Info size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;