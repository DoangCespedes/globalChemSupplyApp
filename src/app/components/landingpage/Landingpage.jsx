

import img from "../../../assets/test1.avif"
import Image from 'next/image'


export default function LandingPage() {
  

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">THE NEW ERA OF CHEMICAL INNOVATION</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming <br />
              molecules into <br />
              solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover and create cutting-edge chemical products with our state-of-the-art tools and expertise.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
                Discover more
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 w-full sm:w-auto">
                Our Products
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src={img}
              alt="Chemical Innovation Illustration"
              className=" h-auto rounded-lg"
              style={{width:"40rem"}}
            />
          </div>
        </div>
      </main>
    </div>
  )
}