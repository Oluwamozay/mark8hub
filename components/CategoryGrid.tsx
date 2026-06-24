'use client';

import Link from 'next/link';

const categories = [
  { name: 'Electronics', emoji: '🔌', count: 45 },
  { name: 'Fashion', emoji: '👕', count: 78 },
  { name: 'Food & Drinks', emoji: '🍲', count: 92 },
  { name: 'Agriculture', emoji: '🌾', count: 34 },
  { name: 'Beauty', emoji: '💄', count: 56 },
  { name: 'Automotive', emoji: '🚗', count: 23 },
  { name: 'Real Estate', emoji: '🏠', count: 12 },
  { name: 'Services', emoji: '🛠️', count: 67 },
  { name: 'Books', emoji: '📚', count: 41 },
  { name: 'Sports', emoji: '⚽', count: 29 },
  { name: 'Health', emoji: '💊', count: 38 },
  { name: 'Home & Kitchen', emoji: '🏡', count: 73 },
  { name: 'Phones & Tablets', emoji: '📱', count: 89 },
  { name: 'Computing', emoji: '💻', count: 52 },
  { name: 'Music & Entertainment', emoji: '🎵', count: 18 },
  { name: 'Kids & Baby', emoji: '👶', count: 35 },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Link key={cat.name} href={`/products?category=${cat.name.toLowerCase()}`} className="bg-white rounded-xl p-6 text-center border border-slate-100 hover:border-[#EA580C] hover:shadow-md transition-all group">
          <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{cat.emoji}</span>
          <h3 className="font-medium text-slate-800 text-sm">{cat.name}</h3>
          <p className="text-xs text-slate-400 mt-1">{cat.count} items</p>
        </Link>
      ))}
    </div>
  );
}
