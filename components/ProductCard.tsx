'use client';

import { ShoppingBag, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  comparePrice?: number;
  image?: string;
  category: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const formatNaira = (amount: number) => {
  return `N${amount.toLocaleString('en-US')}`;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={14}
          className={i <= Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden relative group">
      {/* Category Badge */}
      <span className="absolute top-2 left-2 bg-[#EA580C] text-white text-xs px-2 py-1 rounded z-10">
        {product.category}
      </span>

      {/* Image Placeholder */}
      <div className="bg-slate-200 h-48 flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <ShoppingBag className="text-slate-400" size={48} />
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-slate-800 mb-1 truncate">{product.name}</h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-lg font-bold text-[#EA580C]">{formatNaira(product.price)}</span>
          {product.comparePrice && (
            <span className="text-sm text-slate-400 line-through">{formatNaira(product.comparePrice)}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          {renderStars(product.rating)}
          <span className="text-xs text-slate-500 ml-1">({product.rating})</span>
        </div>

        {/* Add to Cart Button */}
        <button className="btn-primary w-full bg-[#EA580C] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#d04d0a] transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;