import React, { useState, useMemo } from 'react';
import { Search, Home, ChevronRight, Info } from 'lucide-react';
import { UpdatedProductResponse, produits } from '../Types/Product';
import { CartItem } from '../Types/CartItem';

interface ProductGridProps {
  products?: UpdatedProductResponse[];
  setCartItems?: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const ProductGrid: React.FC<ProductGridProps> = ({ setCartItems }) => {
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

        <div className="relative w-80">
          <Search className="absolute left-3 top-2.5 text-[#99a1af]" size={16} />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#1F47E6]"
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
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#03045e] text-white shadow-md shadow-blue-100'
                : 'bg-[#F6F8FC] text-[#03045e] hover:bg-[#ECF3FA] border border-[#E5E7EB]'
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
      className={`relative h-64 bg-white border border-[#E5E7EB] rounded-xl overflow-hidden flex flex-col cursor-pointer hover:shadow-lg hover:border-[#1F47E6] transition-all group ${
        isOutOfStock ? 'opacity-60 grayscale-[0.5] cursor-not-allowed' : ''
      }`}
    >
      {/* Product Image */}
      <div className="h-32 w-full bg-[#F6F8FC] flex items-center justify-center overflow-hidden border-b border-[#E5E7EB]">
        {product.photo ? (
          <img src={product.photo} alt={product.nomProduit} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <span className="text-4xl">📦</span>
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