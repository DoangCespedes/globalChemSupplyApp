"use client"
import React, { useState } from 'react'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import Modal from '../components/modal/Modal.jsx'

// This would typically come from an API or database
const products = [
  {
    id: 1,
    name: 'K-CTiger',
    description: 'Cosmic neon tiger digital art',
    price: 40,
    image: '/placeholder.svg?height=400&width=300',
    items: 1
  },
  {
    id: 2,
    name: 'NFT',
    description: 'Colorful astronaut digital artwork',
    price: 20,
    image: '/placeholder.svg?height=400&width=300',
    items: 1
  },
  {
    id: 3,
    name: 'ponyo',
    description: 'Animated character in water',
    price: 90,
    image: '/placeholder.svg?height=400&width=300',
    items: 1
  },
  {
    id: 4,
    name: 'NBG',
    description: 'Black sleep mask',
    price: 10,
    image: '/placeholder.svg?height=400&width=300',
    items: 150
  },
]

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={400}
              className="w-full h-48 object-cover"
            />
            <button
              className="absolute top-2 right-2 p-1 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors duration-200"
              aria-label="Add to favorites"
              onClick={openModal}
            >
              <Heart className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-sm text-gray-500">{product.items} {product.items > 1 ? 'Items' : 'Item'}</p>
          </div>
          <div className="p-4 flex justify-between items-center border-t border-gray-200">
            <span className="font-bold text-green-600">${product.price}</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
    {isModalOpen && <Modal onClose={closeModal} />}
  </div>

  )
}

export default Products
