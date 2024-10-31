"use client"

import { useState} from 'react'

const page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  
    

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Form submitted:', { name, email, message })
    }
  return (
    <section className="min-h-screen flex items-center bg-gray-100">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
          Preparing for your success, we offer truly exceptional chemical solutions.
          </h1>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">Make an appointment</h2>
            <p className="text-white mb-6">
            Get in touch and find out how we can help you. Our goal is to stay in touch.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Enter a valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Entregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
