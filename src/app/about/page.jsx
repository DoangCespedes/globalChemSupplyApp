import Image from 'next/image'

const about = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">About us</h2>
          <p className="text-lg text-gray-600">
            At ChemSupp, we are dedicated to providing the highest quality chemical supplements for various industries. Our passion for innovation and commitment to excellence have positioned us as leaders in the chemical supplements market.
          </p>
          <p className="text-lg text-gray-600">
          With more than 20 years of experience, our team of chemical experts works tirelessly to develop solutions that meet the changing needs of our customers. We pride ourselves on our rigorous research and development, ensuring that each product meets the highest quality and safety standards.
          </p>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Schedule a Call
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Químico en laboratorio"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default about
