'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Star, ShoppingCart, ChevronLeft, Shield, Truck, RotateCcw } from 'lucide-react';
import Link from 'next/link';

const products = [
  { id: '1', name: 'Akwa Ochie', price: 15000, comparePrice: 18000, category: 'Fashion', rating: 4.5, reviews: 23, description: 'Premium quality Akwa Ochie fabric, perfect for traditional and modern outfits. Handwoven by skilled artisans in Abia State.', stock: 'In Stock', seller: 'Nneka Fashion House' },
  { id: '2', name: 'Ogbono', price: 3500, category: 'Food', rating: 4.8, reviews: 56, description: 'Freshly ground ogbono seeds for that perfect draw soup. Sourced directly from farmers in Enugu.', stock: 'In Stock', seller: 'Mama Nkechi Foods' },
  { id: '3', name: 'Abacha', price: 2500, category: 'Food', rating: 4.3, reviews: 31, description: 'Authentic Abacha (African salad) mix with all the traditional ingredients. Ready to serve.', stock: 'In Stock', seller: 'Ugochi Kitchen' },
  { id: '4', name: 'Isi Agu', price: 8000, comparePrice: 10000, category: 'Food', rating: 4.6, reviews: 18, description: 'Delicious Isi Agu (cow head) prepared with traditional spices. A true delicacy from the East.', stock: 'In Stock', seller: 'Amaka Delicacies' },
  { id: '5', name: 'Nkwobi', price: 5000, category: 'Food', rating: 4.7, reviews: 42, description: 'Spicy nkwobi in rich palm oil sauce. Perfect for gatherings and celebrations.', stock: 'In Stock', seller: 'Amaka Delicacies' },
  { id: '6', name: 'Cowleg Bag', price: 25000, category: 'Fashion', rating: 4.4, reviews: 15, description: 'Handcrafted cowleg leather bag. Durable, stylish, and uniquely Nigerian.', stock: 'Only 2 left', seller: 'Artisan Leather Works' },
  { id: '7', name: 'Ofe Nsala', price: 4500, category: 'Food', rating: 4.2, reviews: 27, description: 'White soup made with fresh catfish and traditional spices. A taste of Anambra.', stock: 'In Stock', seller: 'Ugochi Kitchen' },
  { id: '8', name: 'Ugba', price: 2000, category: 'Food', rating: 4.1, reviews: 33, description: 'Fermented ukpaka (oil bean) seeds, ready for cooking. Rich in protein.', stock: 'In Stock', seller: 'Mama Nkechi Foods' },
  { id: '9', name: 'Akara', price: 1500, category: 'Food', rating: 4.9, reviews: 89, description: 'Crispy golden akara balls made fresh. Perfect breakfast accompaniment.', stock: 'In Stock', seller: 'Mama Nkechi Foods' },
  { id: '10', name: 'Suya Spice', price: 2000, category: 'Food', rating: 4.5, reviews: 64, description: 'Authentic suya pepper mix. Make restaurant-quality suya at home.', stock: 'In Stock', seller: 'Northern Spices Co' },
  { id: '11', name: 'Ankara Fabric', price: 6000, category: 'Fashion', rating: 4.3, reviews: 47, description: 'Vibrant Ankara fabric with traditional patterns. Perfect for any occasion.', stock: 'In Stock', seller: 'Nneka Fashion House' },
  { id: '12', name: 'Palm Oil', price: 3000, category: 'Food', rating: 4.6, reviews: 71, description: 'Pure red palm oil from local farmers. Rich flavor for all your cooking needs.', stock: 'In Stock', seller: 'Eastern Farms Coop' },
];

export default function ProductDetail() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center"><p className="text-xl text-slate-500">Product not found</p></div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/products" className="flex items-center text-slate-500 hover:text-[#EA580C] mb-6"><ChevronLeft className="h-4 w-4 mr-1" /> Back to Products</Link>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-slate-200 rounded-xl h-96 flex items-center justify-center mb-4">
              <span className="text-slate-400 text-lg">Product Image</span>
            </div>
            <div className="flex gap-2">
              {[1,2,3,4].map(i => <div key={i} className="w-20 h-20 bg-slate-200 rounded-lg"></div>)}
            </div>
          </div>
          <div>
            <span className="text-sm bg-[#EA580C]/10 text-[#EA580C] px-3 py-1 rounded-full font-medium">{product.category}</span>
            <h1 className="text-3xl font-bold text-[#1E293B] mt-3 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {[1,2,3,4,5].map(star => <Star key={star} className={`h-4 w-4 ${star <= Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />)}
              <span className="text-sm text-slate-500">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-[#EA580C]">N{product.price.toLocaleString()}</span>
              {product.comparePrice && <span className="text-lg text-slate-400 line-through">N{product.comparePrice.toLocaleString()}</span>}
            </div>
            <p className="text-slate-600 mb-6">{product.description}</p>
            <p className="text-sm text-green-600 font-medium mb-4">{product.stock}</p>
            <p className="text-sm text-slate-500 mb-4">Seller: <span className="font-medium text-slate-700">{product.seller}</span></p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-slate-300 rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity-1))} className="px-3 py-2 text-slate-600 hover:bg-slate-100">-</button>
                <span className="px-4 py-2 border-x border-slate-300">{quantity}</span>
                <button onClick={() => setQuantity(quantity+1)} className="px-3 py-2 text-slate-600 hover:bg-slate-100">+</button>
              </div>
              <button className="flex-1 bg-[#EA580C] text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"><ShoppingCart className="h-5 w-5" /> Add to Cart</button>
            </div>
            <div className="border-t border-slate-200 pt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-600"><Truck className="h-4 w-4 text-[#EA580C]" /> Free delivery within Lagos</div>
              <div className="flex items-center gap-2 text-sm text-slate-600"><Shield className="h-4 w-4 text-[#EA580C]" /> 7-day return policy</div>
              <div className="flex items-center gap-2 text-sm text-slate-600"><RotateCcw className="h-4 w-4 text-[#EA580C]" /> Secure payment with Paystack</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}