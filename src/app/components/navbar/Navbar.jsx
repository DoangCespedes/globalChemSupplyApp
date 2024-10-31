"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import logo from "../../../assets/logo.png"
import Image from 'next/image'
// import "./Styles.css"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false) 
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 border-b" >
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            
            <Image src={logo}/> 
            <span className="text-xl font-bold">GLOBAL CHEM SUPPLY</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/discover" className="text-gray-600 hover:text-gray-900">Discover</Link>
          <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
            <Search className="w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Search" className="bg-transparent focus:outline-none" />
          </div>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Search
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 border-b">
          <div className="flex flex-col space-y-4">
            <Link href="/discover" className="text-gray-600 hover:text-gray-900">Discover</Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
              <Search className="w-4 h-4 text-gray-500" />
              <input type="text" placeholder="Search" className="bg-transparent focus:outline-none w-full" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 w-full">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
