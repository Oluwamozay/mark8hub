'use client'

import { useState } from 'react'
import { BarChart3, Package, ShoppingCart, Wallet, TrendingUp, ArrowUpRight, Megaphone } from 'lucide-react'
import Link from 'next/link'

interface StatCard {
  title: string
  value: string
  icon: React.ReactNode
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
}

interface Order {
  id: string
  customer: string
  product: string
  amount: string
  status: 'completed' | 'pending' | 'processing' | 'cancelled'
  date: string
}

const stats: StatCard[] = [
  { title: 'Total Sales', value: 'N245,000', icon: <BarChart3 className="w-6 h-6" />, change: '+12.5%', changeType: 'positive' },
  { title: 'Active Listings', value: '12', icon: <Package className="w-6 h-6" />, change: '+3', changeType: 'positive' },
  { title: 'Orders', value: '8', icon: <ShoppingCart className="w-6 h-6" />, change: '+2', changeType: 'positive' },
  { title: 'Balance', value: 'N187,500', icon: <Wallet className="w-6 h-6" />, change: 'Available', changeType: 'neutral' },
]

const recentOrders: Order[] = [
  { id: '#ORD-001', customer: 'Chioma Eze', product: 'Ogbono 1kg', amount: 'N3,500', status: 'completed', date: '2026-06-24' },
  { id: '#ORD-002', customer: 'Emeka Okafor', product: 'Abacha & Ugba', amount: 'N2,800', status: 'processing', date: '2026-06-24' },
  { id: '#ORD-003', customer: 'Funke Adeleke', product: 'Dried Pepper 500g', amount: 'N1,200', status: 'pending', date: '2026-06-23' },
  { id: '#ORD-004', customer: 'Yakubu Mohammed', product: 'Groundnut Oil 5L', amount: 'N4,500', status: 'completed', date: '2026-06-23' },
  { id: '#ORD-005', customer: 'Ngozi Obi', product: 'Stockfish 2kg', amount: 'N6,000', status: 'cancelled', date: '2026-06-22' },
  { id: '#ORD-006', customer: 'Tunde Balogun', product: 'Palm Oil 10L', amount: 'N8,500', status: 'completed', date: '2026-06-22' },
  { id: '#ORD-007', customer: 'Amina Suleiman', product: 'Honey 1L', amount: 'N3,000', status: 'processing', date: '2026-06-21' },
  { id: '#ORD-008', customer: 'Chidi Okonkwo', product: 'Yam Tuber (10pcs)', amount: 'N5,500', status: 'completed', date: '2026-06-21' },
]

const statusStyles: Record<Order['status'], string> = {
  completed: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  cancelled: 'bg-red-100 text-red-800',
}

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('7d')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Seller Dashboard</h1>
            <p className="text-gray-500 mt-1">Track your sales, orders, and performance</p>
          </div>
          <div className="flex gap-2">
            {(['7d', '30d', '90d'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${timeframe === t ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
              >
                {t === '7d' ? '7 Days' : t === '30d' ? '30 Days' : '90 Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">{stat.icon}</div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.changeType === 'positive' ? 'bg-green-50 text-green-700' : stat.changeType === 'negative' ? 'bg-red-50 text-red-700' : 'bg-gray-50 text-gray-600'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders Table */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                <Link href="/orders" className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
                  View All <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    {['Order ID', 'Customer', 'Product', 'Amount', 'Status', 'Date'].map((heading) => (
                      <th key={heading} className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${statusStyles[order.status]}`}>{order.status}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Promotions & Quick Actions */}
          <div className="space-y-6">
            {/* Promotions Card */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-sm p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-semibold">Promotions</h2>
              </div>
              <p className="text-orange-100 text-sm mb-4">
                Reach more customers and boost your sales with targeted ads.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-orange-100">Impressions this week</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-100">Clicks</span>
                  <span className="font-semibold">38</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '65%' }} />
                </div>
              </div>
              <Link
                href="/ads"
                className="block w-full text-center bg-white text-orange-600 font-semibold py-2.5 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Create Ad Campaign
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">4.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600">Avg. Order Value</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">N4,350</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-purple-500" />
                    <span className="text-sm text-gray-600">Pending Fulfillment</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
