'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Condition = 'New' | 'Like New' | 'Good' | 'Fair'
type Category = 'All' | 'Electronics' | 'Fashion' | 'Books' | 'Home' | 'Sports'

interface UsedItem {
  id: string
  title: string
  price: number
  originalPrice: number
  condition: Condition
  category: Category
  image: string
  seller: string
  location: string
}

const conditions: Condition[] = ['New', 'Like New', 'Good', 'Fair']
const categories: Category[] = ['All', 'Electronics', 'Fashion', 'Books', 'Home', 'Sports']

const mockItems: UsedItem[] = [
  {
    id: 'u1',
    title: 'iPhone 14 Pro Max 256GB',
    price: 750000,
    originalPrice: 1200000,
    condition: 'Like New',
    category: 'Electronics',
    image: '/placeholder.svg',
    seller: 'Tunde_Tech',
    location: 'Lagos',
  },
  {
    id: 'u2',
    title: 'Nike Air Force 1 Size 42',
    price: 45000,
    originalPrice: 85000,
    condition: 'Good',
    category: 'Fashion',
    image: '/placeholder.svg',
    seller: 'ShoePlug',
    location: 'Abuja',
  },
  {
    id: 'u3',
    title: 'MacBook Pro M3 14-inch',
    price: 1200000,
    originalPrice: 2000000,
    condition: 'New',
    category: 'Electronics',
    image: '/placeholder.svg',
    seller: 'GadgetHub',
    location: 'Port Harcourt',
  },
  {
    id: 'u4',
    title: 'Calculus Textbook - Engineering Maths',
    price: 8500,
    originalPrice: 25000,
    condition: 'Fair',
    category: 'Books',
    image: '/placeholder.svg',
    seller: 'BookWorm',
    location: 'Ibadan',
  },
]

const conditionColors: Record<Condition, string> = {
  New: 'bg-green-100 text-green-800',
  'Like New': 'bg-blue-100 text-blue-800',
  Good: 'bg-yellow-100 text-yellow-800',
  Fair: 'bg-red-100 text-red-800',
}

export default function ResellListingsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [selectedCondition, setSelectedCondition] = useState<Condition | 'All'>('All')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000])

  const filteredItems = mockItems.filter((item) => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false
    if (selectedCondition !== 'All' && item.condition !== selectedCondition) return false
    if (item.price < priceRange[0] || item.price > priceRange[1]) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Pre-owned Items</h1>
            <p className="text-gray-600 mt-1">Browse second-hand items at great prices</p>
          </div>
          <Link
            href="/resell"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Sell an Item
          </Link>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className="w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6 sticky top-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-3">Condition</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCondition('All')}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCondition === 'All'
                        ? 'bg-purple-100 text-purple-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    All Conditions
                  </button>
                  {conditions.map((cond) => (
                    <button
                      key={cond}
                      onClick={() => setSelectedCondition(cond)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCondition === cond
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cond}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-gray-500">Min: ₦{priceRange[0].toLocaleString()}</label>
                    <input
                      type="range"
                      min={0}
                      max={5000000}
                      step={10000}
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])
                      }
                      className="w-full accent-purple-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Max: ₦{priceRange[1].toLocaleString()}</label>
                    <input
                      type="range"
                      min={0}
                      max={5000000}
                      step={10000}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])
                      }
                      className="w-full accent-purple-600"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedCondition('All')
                  setPriceRange([0, 5000000])
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Items Grid */}
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-4">{filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-gray-100 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <span
                      className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${conditionColors[item.condition]}`}
                    >
                      {item.condition}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{item.title}</h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-lg font-bold text-purple-600">₦{item.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 line-through">₦{item.originalPrice.toLocaleString()}</span>
                      <span className="text-xs text-green-600 font-medium">
                        {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                      <span>{item.seller}</span>
                      <span>{item.location}</span>
                    </div>
                    <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No items match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedCondition('All')
                    setPriceRange([0, 5000000])
                  }}
                  className="mt-4 text-purple-600 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
