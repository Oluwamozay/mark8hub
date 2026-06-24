'use client';

import { useState } from 'react';
import Link from 'next/link';

const countries = ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'United States', 'United Kingdom', 'Canada', 'Other'];

const cartItems = [
  { name: 'Ogbono Soup Pack', qty: 2, price: 7500 },
  { name: 'Abacha & Ugba', qty: 1, price: 8500 },
  { name: 'Palm Oil (1L)', qty: 3, price: 4500 },
];

const subtotal = 37500;
const shipping = 2500;
const total = 40000;

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [shipping, setShipping] = useState({
    full_name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    country: 'Nigeria',
  });
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleContinueToPayment = () => {
    if (shipping.full_name && shipping.phone && shipping.street && shipping.city && shipping.state) {
      setStep(2);
    }
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/cart" className="hover:text-orange-600">Cart</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Checkout</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center mb-8">
          <div className={`flex items-center ${step >= 1 ? 'text-orange-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <span className="ml-2 font-medium">Shipping</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 ${step >= 2 ? 'bg-orange-600' : 'bg-gray-200'}`} />
          <div className={`flex items-center ${step >= 2 ? 'text-orange-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <span className="ml-2 font-medium">Payment</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 ${step >= 3 ? 'bg-orange-600' : 'bg-gray-200'}`} />
          <div className={`flex items-center ${step >= 3 ? 'text-orange-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 3 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
            <span className="ml-2 font-medium">Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" name="full_name" value={shipping.full_name} onChange={handleShippingChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="John Doe" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" name="phone" value={shipping.phone} onChange={handleShippingChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="+234 801 234 5678" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input type="text" name="street" value={shipping.street} onChange={handleShippingChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="123 Main Street" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" name="city" value={shipping.city} onChange={handleShippingChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="Lagos" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input type="text" name="state" value={shipping.state} onChange={handleShippingChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="Lagos" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select name="country" value={shipping.country} onChange={handleShippingChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none">
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <button onClick={handleContinueToPayment} className="btn-primary mt-6 w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>
                <div className="space-y-3">
                  {[
                    { id: 'card', label: 'Card', icon: '💳', desc: 'Pay with debit/credit card via Paystack' },
                    { id: 'bank', label: 'Bank Transfer', icon: '🏦', desc: 'Transfer directly to our bank account' },
                    { id: 'ussd', label: 'USSD', icon: '📱', desc: 'Pay via USSD code on any network' },
                    { id: 'mobile', label: 'Mobile Money', icon: '📲', desc: 'Pay with mobile money wallet' },
                    { id: 'cod', label: 'Cash on Delivery', icon: '💵', desc: 'Pay when you receive your order' },
                    { id: 'crypto', label: 'Crypto', icon: '₿', desc: 'Pay with cryptocurrency' },
                  ].map((method) => (
                    <label key={method.id} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === method.id ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input type="radio" name="payment" value={method.id} checked={paymentMethod === method.id} onChange={() => setPaymentMethod(method.id)} className="h-4 w-4 text-orange-600 focus:ring-orange-500" />
                      <div className="ml-3 flex items-center gap-3">
                        {method.id === 'card' && (
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
                          </svg>
                        )}
                        {method.id === 'crypto' && (
                          <Link href="/checkout/crypto" className="text-orange-600 hover:underline text-sm">
                            Pay with Crypto →
                          </Link>
                        )}
                        <span className="font-medium text-gray-900">{method.label}</span>
                        <span className="text-sm text-gray-500">{method.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
                <button onClick={handlePlaceOrder} className="btn-primary mt-6 w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Place Order
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="divide-y divide-gray-100">
                {cartItems.map((item, i) => (
                  <div key={i} className="py-3 flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">₦{item.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>₦{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
