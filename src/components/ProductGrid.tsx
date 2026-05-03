import React, { useState, useMemo } from 'react';
import { Search, Home, ChevronRight, Info } from 'lucide-react';
import { UpdatedProductResponse, produits } from '../Types/Product';

interface ProductGridProps {
  // You can add props here if needed, e.g. products: UpdatedProductResponse[]
  products?: UpdatedProductResponse[];
  setProducts?: (products: UpdatedProductResponse[]) => void;
}
const ProductGrid: React.FC<ProductGridProps> = ({ products, setProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Extract unique categories from product list
  const categories = useMemo(() => {
    const cats = produits.map(p => p.categorie || 'Autres');
    return ['Tous', ...Array.from(new Set(cats))];
  }, []);

  // Filter logic
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
    <div className="flex-1 flex flex-col bg-[var(--color-secondary-background)] h-full overflow-hidden">
      {/* Top Navigation & Search Bar */}
      <header className="p-4 bg-white border-b border-[var(--color-secondary-light)] flex justify-between items-center">
        <div className="flex items-center gap-3 text-[var(--color-primary)]">
          <Home size={18} className="cursor-pointer hover:text-[var(--color-secondary)]" />
          <ChevronRight size={14} className="text-[var(--color-secondary-gray)]" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">Produits</span>
          </div>
        </div>
        
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-secondary-gray)]" size={16} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Nom ou référence..." 
            className="w-full pl-10 pr-4 py-2 border border-[var(--color-secondary-light)] rounded-md text-sm outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]"
          />
        </div>
      </header>

      {/* Category Filter Bar */}
      <div className="bg-white px-4 py-2 flex gap-2 overflow-x-auto border-b border-[var(--color-secondary-light)] no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[var(--color-secondary)] text-white'
                : 'bg-[var(--color-secondary-super-light)] text-[var(--color-primary)] hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Product Grid */}
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 overflow-y-auto flex-1">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: UpdatedProductResponse) => (
            <ProductCard key={product.idProduit} product={product} handleClick={(product:UpdatedProductResponse)=>{
                console.log(product)
                const newProducts:UpdatedProductResponse[]=products||[];
                newProducts.push(product)
               setProducts && setProducts(newProducts)
            }} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-[var(--color-secondary-gray)]">
            <Search size={48} className="mb-2 opacity-20" />
            <p>Aucun produit trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: UpdatedProductResponse,handleClick:(product:UpdatedProductResponse)=>void }> = ({ product,handleClick }) => {
  const isOutOfStock = product.stockQuantity <= 0;

  return (
    <div 
    onClick={()=>{
      handleClick(product)
       
    }}
      className={`relative h-60 bg-white border border-[var(--color-secondary-light)] rounded-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-all ${
        isOutOfStock ? 'opacity-60 grayscale-[0.5]' : ''
      }`}
    >
      {/* Product Image */}
      <div className="h-24 w-full bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
        {product.photo ? (
          <img
            src={product.photo}
            alt={product.nomProduit}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl">📦</span>
        )}

        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white font-bold text-[10px] uppercase bg-red-600 px-2 py-0.5 rounded">
              Rupture
            </span>
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-2 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xs font-bold text-[var(--color-primary)] line-clamp-1">
            {product.nomProduit}
          </h3>

          <div className="flex justify-between items-center mt-1">
            <span className="text-[10px] text-[var(--color-secondary-gray)] truncate">
              {product.reference}
            </span>

            <span className="text-[9px] px-1.5 py-0.5 bg-[var(--color-secondary-super-light)] text-[var(--color-secondary)] rounded font-bold whitespace-nowrap">
              {product.uom}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-1 pt-1 border-t border-dashed border-gray-100 flex justify-between items-end">
          <div>
            <p className="text-[var(--color-secondary)] font-black text-sm leading-none">
              {product.prixVente?.toLocaleString()} FCFA
            </p>

            <p
              className={`text-[9px] font-bold mt-1 ${
                product.stockQuantity < 10
                  ? 'text-orange-500'
                  : 'text-green-600'
              }`}
            >
              Stock: {product.stockQuantity}
            </p>
          </div>

          <Info
            size={12}
            className="text-[var(--color-secondary-light)] mb-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;