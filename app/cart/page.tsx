'use client';

import { useState } from 'react';
import { Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Akwa Ochie', price: 15000, quantity: 2, image: '' },
    { id: 2, name: 'Ogbono', price: 3500, quantity: 3, image: '' },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 2500 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-slate-700 mb-2">Your cart is empty</h2>
          <p className="text-slate-500 mb-6">Start shopping to add items to your cart</p>
          <Link href="/products" className="inline-block bg-[#EA580C] text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-[#1E293B] mb-8">Shopping Cart</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-slate-100">
                <div className="w-20 h-20 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="h-8 w-8 text-slate-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">{item.name}</h3>
                  <p className="text-[#EA580C] font-bold">N{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center border border-slate-300 rounded-lg">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 text-slate-600 hover:bg-slate-100">-</button>
                  <span className="px-3 py-1 border-x border-slate-300">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 text-slate-600 hover:bg-slate-100">+</button>
                </div>
                <p className="font-semibold text-slate-800 w-24 text-right">N{(item.price * item.quantity).toLocaleString()}</p>
                <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600"><Trash2 className="h-5 w-5" /></button>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-fit">
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-slate-600"><span>Subtotal</span><span>N{subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between text-slate-600"><span>Shipping</span><span>{shipping > 0 ? 'N' + shipping.toLocaleString() : 'Free'}</span></div>
              <div className="border-t border-slate-200 pt-3 flex justify-between text-lg font-bold text-[#1E293B]"><span>Total</span><span className="text-[#EA580C]">N{total.toLocaleString()}</span></div>
            </div>
            <Link href="/checkout" className="block w-full bg-[#EA580C] text-white py-3 rounded-lg font-medium text-center hover:bg-orange-600 transition-colors">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}