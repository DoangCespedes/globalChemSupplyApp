import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Facebook, Linkedin, Youtube, Slack } from 'lucide-react'
import logo from "../../../assets/log (1).png"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <Image src={logo} alt="Cosmic Logo" width={350} height={350} style={{marginTop:"-5rem"}}/>
            {/* <h2 className="mt-4 text-2xl font-bold">The New Creative Economy.</h2> */}
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/discover" className="hover:underline">Discover</Link>
              <Link href="/create-item" className="hover:underline">Create Item</Link>
              <Link href="/about-us" className="hover:underline">About Us</Link>
            </nav>
          </div>

          {/* About Cosmic */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Cosmic</h3>
            <nav className="flex flex-col space-y-2 mb-4">
              <Link href="/documentation" className="hover:underline">Documentation</Link>
              <Link href="/contact-us" className="hover:underline">Contact Us</Link>
            </nav>
            <div className="flex space-x-4 mb-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6 hover:text-blue-300 transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6 hover:text-blue-300 transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 hover:text-blue-300 transition-colors" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="w-6 h-6 hover:text-blue-300 transition-colors" />
              </Link>
              <Link href="#" aria-label="Slack">
                <Slack className="w-6 h-6 hover:text-blue-300 transition-colors" />
              </Link>
            </div>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
              Subscribe Newsletter
            </button>
          </div>
        </div>
        
        {/* Horizontal line */}
        <div className="border-t border-blue-400 my-8"></div>
        
        {/* Powered by Cosmic */}
        <div className="text-center">
          <p className="text-sm">Powered by <span className="font-semibold">Cosmic</span></p>
        </div>
      </div>
    </footer>
  )
}