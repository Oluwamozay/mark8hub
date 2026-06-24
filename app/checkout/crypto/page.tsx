'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const coins = [
  { id: 'BTC', name: 'Bitcoin', address: 'bc1q5arj7n5q2k3x9p6z4m8v0c3d6f2g1h9j7k4l2m' },
  { id: 'ETH', name: 'Ethereum', address: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18' },
  { id: 'USDT', name: 'Tether (ERC-20)', address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063' },
  { id: 'USDC', name: 'USD Coin', address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174' },
  { id: 'BNB', name: 'Binance Coin', address: 'bnb1x9l7q5n2k3x9p6z4m8v0c3d6f2g1h9j7k4l2m' },
];

const exchangeRates: Record<string, number> = {
  BTC: 0.0000026,
  ETH: 0.000038,
  USDT: 102.56,
  USDC: 102.56,
  BNB: 0.00018,
};

export default function CryptoCheckoutPage() {
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  const coin = coins.find(c => c.id === selectedCoin)!;
  const amountInCrypto = (40000 * exchangeRates[selectedCoin]).toFixed(selectedCoin === 'USDT' || selectedCoin === 'USDC' ? 2 : 6);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="max-w-lg w-full mx-auto px-4">
        <Link href="/checkout" className="text-orange-600 hover:underline text-sm mb-6 inline-block">
          &larr; Back to Checkout
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Pay with Cryptocurrency</h1>

          {/* Timer */}
          <div className={`text-center mb-6 ${timeLeft <= 120 ? 'text-red-600' : 'text-gray-600'}`}>
            <p className="text-sm font-medium">Time remaining to complete payment</p>
            <p className="text-4xl font-bold mt-1">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </p>
          </div>

          {/* Coin Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Coin</label>
            <div className="grid grid-cols-5 gap-2">
              {coins.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCoin(c.id)}
                  className={`py-2 px-1 rounded-lg text-sm font-medium transition-all ${selectedCoin === c.id ? 'bg-orange-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {c.id}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">{coin.name}</p>
          </div>

          {/* Amount */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">Amount to pay</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{amountInCrypto} {selectedCoin}</p>
            <p className="text-sm text-gray-500 mt-1">≈ ₦40,000.00</p>
          </div>

          {/* Wallet Address */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Send to this {selectedCoin} Address</label>
            <div className="relative">
              <input
                type="text"
                readOnly
                value={coin.address}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-20 text-sm font-mono bg-gray-50"
              />
              <button
                onClick={() => navigator.clipboard.writeText(coin.address)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-orange-700 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                <p className="text-xs text-gray-400 mt-2">QR Code</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Send the exact amount shown above to the wallet address. Your order will be processed automatically once the transaction is confirmed on the blockchain.
          </p>
        </div>
      </div>
    </div>
  );
}
