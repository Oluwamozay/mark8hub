'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const allProducts = [
  { id: '1', name: 'Akwa Ochie', price: 15000, comparePrice: 18000, category: 'Fashion', rating: 4.5 },
  { id: '2', name: 'Ogbono', price: 3500, category: 'Food', rating: 4.8 },
  { id: '3', name: 'Abacha', price: 2500, category: 'Food', rating: 4.3 },
  { id: '4', name: 'Isi Agu', price: 8000, comparePrice: 10000, category: 'Food', rating: 4.6 },
  { id: '5', name: 'Nkwobi', price: 5000, category: 'Food', rating: 4.7 },
  { id: '6', name: 'Cowleg Bag', price: 25000, category: 'Fashion', rating: 4.4 },
  { id: '7', name: 'Ofe Nsala', price: 4500, category: 'Food', rating: 4.2 },
  { id: '8', name: 'Ugba', price: 2000, category: 'Food', rating: 4.1 },
  { id: '9', name: 'Akara', price: 1500, category: 'Food', rating: 4.9 },
  { id: '10', name: 'Suya Spice', price: 2000, category: 'Food', rating: 4.5 },
  { id: '11', name: 'Ankara Fabric', price: 6000, category: 'Fashion', rating: 4.3 },
  { id: '12', name: 'Palm Oil', price: 3000, category: 'Food', rating: 4.6 },
];

const categories = ['All', 'Fashion', 'Food', 'Electronics', 'Beauty', 'Agriculture'];

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sort, setSort] = useState('newest');

  let filtered = allProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-[#1E293B] mb-6">All Products</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input type="text" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA580C]" />
          </div>
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA580C]">
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-[#EA580C] text-white' : 'bg-white text-slate-600 border border-slate-300 hover:border-[#EA580C]'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No products found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
