'use client';

import { ShoppingBag, Star } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  comparePrice?: number;
  image?: string;
  category: string;
  rating: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const formatNaira = (amount: number) => 'N' + amount.toLocaleString();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all group">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 bg-slate-200 flex items-center justify-center overflow-hidden">
          <ShoppingBag className="h-12 w-12 text-slate-400" />
          <span className="absolute top-2 left-2 bg-[#EA580C] text-white text-xs px-2 py-1 rounded-full font-medium">{product.category}</span>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-slate-800 mb-1 hover:text-[#EA580C] transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-[#EA580C]">{formatNaira(product.price)}</span>
          {product.comparePrice && (
            <span className="text-sm text-slate-400 line-through">{formatNaira(product.comparePrice)}</span>
          )}
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[1,2,3,4,5].map((star) => (
            <Star key={star} className={`h-4 w-4 ${star <= Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
          ))}
          <span className="text-xs text-slate-400 ml-1">({product.rating})</span>
        </div>
        <button className="w-full bg-[#EA580C] text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Add to Cart</button>
      </div>
    </div>
  );
}
