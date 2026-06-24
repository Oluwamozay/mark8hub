'use client';

import Link from 'next/link';

export default function Footer() {
  const links = {
    'Mark8Hub': ['About', 'Blog', 'Careers', 'Press'],
    'Shop': ['All Products', 'Categories', 'Deals', 'New Arrivals'],
    'Sell': ['Start Selling', 'Seller Dashboard', 'Advertise', 'Resell'],
    'Support': ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service']
  };

  return (
    <footer className="bg-[#1E293B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 text-sm">&copy; 2026 Mark8Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}