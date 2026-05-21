import React, { useEffect, useState } from 'react';
import { ChevronRight, Delete, Keyboard, Hash } from 'lucide-react';
import { CartItem } from '../Types/CartItem';
import { toast } from 'sonner';
import { EmployeeResponse, EmployeePermission } from '../Types/Seller';
import { clickedContainer } from '../Types/ClickedContainer';



interface CalculatorProps {
  clickedContainer?: clickedContainer;
  showPayment?: boolean;
  setShowPayment?: React.Dispatch<React.SetStateAction<boolean>>;
  onlyPad?: boolean;
  employee?: EmployeeResponse;
}

const ActionNumpad: React.FC<CalculatorProps> = ({ clickedContainer, showPayment, setShowPayment, onlyPad, employee }) => {
  const [inputBuffer, setInputBuffer] = useState<string>('0');
  const [activeMode, setActiveMode] = useState<'Qty' | '% Disc' | 'Price' | 'Aa'>('Qty');
  const [isKeyboardMode, setIsKeyboardMode] = useState<boolean>(false);
  const [capsLock, setCapsLock] = useState<boolean>(true);
  const [isBufferDirty, setIsBufferDirty] = useState<boolean>(false);

  // Hardcoded Color Palette for reference
  const colors = {
    primary: '#03045e',
    secondary: '#1F47E6',
    lightGray: '#E5E7EB',
    superLightBlue: '#ECF3FA',
    bgLight: '#F6F8FC',
    grayText: '#99a1af'
  };

  const applyChange = (mode: 'Qty' | '% Disc' | 'Price' | 'Aa', value: string) => {
    if (clickedContainer?.type === 'input') {
      if (mode !== 'Aa' && clickedContainer.inputType !== 'number') {
        toast.error("Veuillez sélectionner un article du panier pour modifier la quantité/le prix.");
        return;
      }
      clickedContainer.setData(value);
      return;
    }

    const currentItem: CartItem = clickedContainer?.data;
    if (!currentItem) return;

    const numValue = Number(value);
    const updatedData = { ...currentItem };

    if (mode === "Qty") {
      if (isNaN(numValue)) {
        toast.error("Quantité invalide");
        return;
      }
      updatedData.quantity = numValue;
    } else if (mode === "Price") {
      if (isNaN(numValue)) {
        toast.error("Prix invalide");
        return;
      }
      updatedData.unitPrice = numValue;
    } else if (mode === "% Disc") {
      if (isNaN(numValue)) {
        toast.error("Remise invalide");
        return;
      }
      if (numValue < 0 || numValue > 100) {
        toast.error("La remise doit être entre 0 et 100%");
        return;
      }
      updatedData.discountPercentage = numValue;
    } else if (mode === "Aa") {
      return; // We do not allow renaming products from the cart
    }

    clickedContainer?.setData(updatedData);
    setInputBuffer('0');
  };

  const handleNumber = (num: string) => {
    setIsBufferDirty(true);
    setInputBuffer((prev) => {
      const nextVal = num === '.' ? (prev.includes('.') ? prev : prev + '.') : (prev === '0' ? num : prev + num);
      if (clickedContainer?.type === 'input') {
        clickedContainer.setData(nextVal);
      }
      return nextVal;
    });
  };

  const handleMode = (mode: 'Qty' | '% Disc' | 'Price' | 'Aa') => {
    if (mode === 'Aa' && clickedContainer?.type !== 'input') {
      toast.error("Vous ne pouvez pas renommer un article du panier.");
      return;
    }
    if (mode === 'Price' && employee && !employee.permissions?.includes(EmployeePermission.NEGOTIATE_PRICE)) {
      toast.error("Vous n'avez pas la permission de modifier le prix.");
      return;
    }
    if (mode === '% Disc' && employee && !employee.permissions?.includes(EmployeePermission.GIVE_DISCOUNT)) {
      toast.error("Vous n'avez pas la permission d'accorder une remise.");
      return;
    }

    if (isBufferDirty) {
      applyChange(mode, inputBuffer);
      toast.success(`Valeur appliquée pour ${mode}`);
    } else if (activeMode !== mode) {
      toast.success("Mode changé en " + mode);
    }

    setIsBufferDirty(false);
    setActiveMode(mode);
    if (mode === 'Aa') {
      setIsKeyboardMode(true);
    } else {
      setIsKeyboardMode(false);
    }
  };

  const handleKeyClick = (char: string) => {
    setIsBufferDirty(true);
    if (char === '⌫') {
      setInputBuffer((prev) => {
        let nextVal = prev.length > 1 ? prev.slice(0, -1) : '0';
        if (clickedContainer?.type === 'input' && nextVal === '0') {
          nextVal = '';
        }
        if (clickedContainer?.type === 'input') {
          clickedContainer.setData(nextVal);
        }
        return nextVal;
      });
    } else {
      const resolvedChar = capsLock ? char : char.toLowerCase();
      setInputBuffer((prev) => {
        const nextVal = prev === '0' ? resolvedChar : prev + resolvedChar;
        if (clickedContainer?.type === 'input') {
          clickedContainer.setData(nextVal);
        }
        return nextVal;
      });
    }
  };

  useEffect(() => {
    if (!clickedContainer) return;

    setIsBufferDirty(false);

    if (clickedContainer.type === 'input') {
      if (clickedContainer.inputType === 'number') {
        setActiveMode('Qty');
        setIsKeyboardMode(false);
      } else {
        setActiveMode('Aa');
        setIsKeyboardMode(true);
      }
      setInputBuffer(clickedContainer.data || '');
    } else {
      const currentItem = clickedContainer.data;
      if (!currentItem) return;

      let nextMode = activeMode;
      if (activeMode === 'Aa') {
        nextMode = 'Qty';
        setActiveMode('Qty');
        setIsKeyboardMode(false);
      }

      if (nextMode === 'Qty') {
        setInputBuffer(String(currentItem.quantity || 0));
      } else if (nextMode === 'Price') {
        setInputBuffer(String(currentItem.unitPrice ?? currentItem.prixVente ?? 0));
      } else if (nextMode === '% Disc') {
        setInputBuffer(String(currentItem.discountPercentage || 0));
      }
    }
  }, [clickedContainer, activeMode]);

  const actionKeys = [
    { key: '1', handler: () => handleNumber('1') },
    { key: '2', handler: () => handleNumber('2') },
    { key: '3', handler: () => handleNumber('3') },
    { key: 'Qty', handler: () => handleMode('Qty') },
    { key: '4', handler: () => handleNumber('4') },
    { key: '5', handler: () => handleNumber('5') },
    { key: '6', handler: () => handleNumber('6') },
    { key: '% Disc', handler: () => handleMode('% Disc') },
    { key: '7', handler: () => handleNumber('7') },
    { key: '8', handler: () => handleNumber('8') },
    { key: '9', handler: () => handleNumber('9') },
    { key: 'Price', handler: () => handleMode('Price') },
    { key: 'Aa', handler: () => handleMode('Aa') },
    { key: '0', handler: () => handleNumber('0') },
    { key: '.', handler: () => handleNumber('.') },
    {
      key: '⌫', handler: () => {
        setIsBufferDirty(true);
        setInputBuffer((prev) => {
        let nextVal = prev.length > 1 ? prev.slice(0, -1) : '0';
        if (clickedContainer?.type === 'input' && nextVal === '0') {
          nextVal = '';
        }
        if (clickedContainer?.type === 'input') {
          clickedContainer.setData(nextVal);
        }
        return nextVal;
      });
      }
    }
  ];

  return (
    <div className="flex flex-col border-t border-[#E5E7EB]">
      {/* Visual Display - Hidden in onlyPad mode */}
      {!onlyPad && (
        <div className="bg-[#F6F8FC] p-3 flex justify-between items-center border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#03045e] uppercase opacity-70">
              {activeMode}
            </span>
            <button
              onClick={() => setIsKeyboardMode(!isKeyboardMode)}
              className="p-1.5 rounded bg-[#ECF3FA] text-[#1F47E6] hover:bg-[#1F47E6] hover:text-white transition-all flex items-center justify-center"
              title={isKeyboardMode ? "Mode Pavé Numérique" : "Mode Clavier"}
            >
              {isKeyboardMode ? <Hash size={16} /> : <Keyboard size={16} />}
            </button>
          </div>
          <span className="text-2xl font-mono font-bold text-[#03045e] truncate max-w-[220px]">
            {inputBuffer}
          </span>
        </div>
      )}

      <div className="flex">
        {isKeyboardMode ? (
          /* Keyboard Mode - occupies full width, covering both columns */
          <div className="w-full h-[256px] flex bg-[#F6F8FC] select-none border-l border-b border-[#E5E7EB]">
            {/* Keyboard Keys */}
            <div className="flex-1 flex flex-col justify-between p-2 gap-1 bg-[#F6F8FC]">
              {/* Row 1 */}
              <div className="flex gap-1.5 justify-center w-full">
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((char) => (
                  <button
                    key={char}
                    onClick={() => handleKeyClick(char)}
                    className="flex-1 h-12 bg-white hover:bg-blue-50 active:bg-blue-100 text-[#03045e] font-bold rounded-xl shadow-sm border border-gray-200 text-sm transition-all"
                  >
                    {capsLock ? char : char.toLowerCase()}
                  </button>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex gap-1.5 justify-center w-full pl-[4%] pr-[4%]">
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((char) => (
                  <button
                    key={char}
                    onClick={() => handleKeyClick(char)}
                    className="flex-1 h-12 bg-white hover:bg-blue-50 active:bg-blue-100 text-[#03045e] font-bold rounded-xl shadow-sm border border-gray-200 text-sm transition-all"
                  >
                    {capsLock ? char : char.toLowerCase()}
                  </button>
                ))}
              </div>

              {/* Row 3 */}
              <div className="flex gap-1.5 justify-center w-full">
                <button
                  onClick={() => setCapsLock(!capsLock)}
                  className={`w-[12%] h-12 text-sm font-bold rounded-xl shadow-sm border border-gray-200 transition-all ${capsLock ? 'bg-[#1F47E6] text-white' : 'bg-white text-[#03045e] hover:bg-blue-50'
                    }`}
                >
                  ⇪
                </button>
                {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((char) => (
                  <button
                    key={char}
                    onClick={() => handleKeyClick(char)}
                    className="flex-1 h-12 bg-white hover:bg-blue-50 active:bg-blue-100 text-[#03045e] font-bold rounded-xl shadow-sm border border-gray-200 text-sm transition-all"
                  >
                    {capsLock ? char : char.toLowerCase()}
                  </button>
                ))}
                <button
                  onClick={() => handleKeyClick('⌫')}
                  className="w-[15%] h-12 bg-white hover:bg-blue-50 active:bg-blue-100 text-[#99a1af] flex items-center justify-center rounded-xl shadow-sm border border-gray-200 transition-all"
                >
                  <Delete size={20} />
                </button>
              </div>

              {/* Row 4 */}
              <div className="flex gap-1.5 justify-center w-full">
                <button
                  onClick={() => setIsKeyboardMode(false)}
                  className="w-[15%] h-12 bg-[#ECF3FA] hover:bg-[#1F47E6] hover:text-white text-[#1F47E6] font-bold rounded-xl shadow-sm border border-gray-200 text-xs transition-all uppercase tracking-tight"
                >
                  123
                </button>
                <button
                  onClick={() => handleKeyClick(' ')}
                  className="w-[50%] h-12 bg-white hover:bg-blue-50 active:bg-blue-100 text-[#03045e] font-bold rounded-xl shadow-sm border border-gray-200 text-xs transition-all uppercase tracking-wider"
                >
                  Espace
                </button>
                {['-', '_', '.'].map((char) => (
                  <button
                    key={char}
                    onClick={() => handleKeyClick(char)}
                    className="w-12 h-12 bg-white hover:bg-blue-50 active:bg-blue-100 text-[#03045e] font-bold rounded-xl shadow-sm border border-gray-200 text-sm transition-all"
                  >
                    {char}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setInputBuffer('');
                    if (clickedContainer?.type === 'input') {
                      clickedContainer.setData('');
                    }
                  }}
                  className="w-[15%] h-12 bg-red-50 hover:bg-red-500 hover:text-white text-red-500 font-bold rounded-xl shadow-sm border border-red-200 text-xs transition-all uppercase tracking-tight"
                >
                  C
                </button>
              </div>
            </div>

            {/* Right Mode Keys (1 Column) - Hidden in onlyPad mode */}
            {!onlyPad && (
              <div className="w-[100px] flex flex-col bg-white border-l border-[#E5E7EB]">
                {['Qty', '% Disc', 'Price', 'Aa'].map((key) => {
                  const isActive = activeMode === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleMode(key as any)}
                      className={`flex-1 font-bold text-xs border-b border-[#E5E7EB] last:border-b-0 transition-colors ${isActive
                          ? 'bg-[#03045e] text-white'
                          : 'bg-[#ECF3FA] text-[#03045e] hover:bg-[#E5E7EB]'
                        }`}
                    >
                      {key}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Numpad Mode - standard split layout */
          <>
            {/* Payment Button Column (1/3) - Hidden in onlyPad mode */}
            {!onlyPad && (
              <div className="w-1/3 h-full flex flex-col">
                {/* 30% Top: Independent Payment Button */}
                <button
                  onClick={() => {
                    setShowPayment && setShowPayment(!showPayment)
                  }}
                  className="h-[30%] w-full bg-[#03045e] text-white flex flex-col items-center justify-center shadow-md hover:bg-[#05067a] transition-all border border-[#03045e] group"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 group-hover:text-white transition-colors">
                    Payment
                  </span>
                  <span className="text-[9px] opacity-50 font-bold uppercase mt-1">Method</span>
                </button>

                {/* 70% Bottom: Independent Order Button */}
                <button className="h-[70%] w-full bg-[#1F47E6] text-white flex flex-col items-center justify-center gap-3  shadow-lg shadow-blue-100 hover:brightness-110 transition-all border border-[#1F47E6]">
                  <div className="p-2 bg-white/10 rounded-full">
                    <ChevronRight size={40} strokeWidth={3} />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-black uppercase tracking-widest leading-none">
                      Order
                    </span>
                    <span className="text-[11px] font-bold opacity-70 mt-2 uppercase tracking-tighter">
                      Validate & Print
                    </span>
                  </div>
                </button>
              </div>
            )}

            {/* Numpad Column (2/3 or w-full in onlyPad mode) */}
            <div className={`${onlyPad ? 'w-full' : 'w-2/3'} grid grid-cols-4 bg-white`}>
              {actionKeys.map((item) => {
                const isModeKey = ['Qty', '% Disc', 'Price', 'Aa'].includes(item.key);
                const isActive = activeMode === item.key;

                // In onlyPad mode, we can hide the Qty, % Disc, and Price buttons to simplify,
                // or we can still show them. Let's show them but keep them formatted.
                return (
                  <button
                    key={item.key}
                    onClick={item.handler}
                    className={`h-16 border-l border-b border-[#E5E7EB] font-bold text-lg transition-colors ${isModeKey
                        ? isActive
                          ? 'bg-[#03045e] text-white'
                          : 'bg-[#ECF3FA] text-[#03045e]'
                        : 'text-[#03045e] hover:bg-[#F6F8FC]'
                      }`}
                  >
                    {item.key === '⌫' ? (
                      <div className="flex justify-center text-[#99a1af]"><Delete size={20} /></div>
                    ) : (
                      item.key
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ActionNumpad;