import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    < >
        <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <Image
            src="/contact-background.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 mix-blend-overlay"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Contact us!</h2>
            <p className="text-lg mb-12">
            If you want information or learn more about our brands, you can do so through the
            Contact Form. You can also call our hotlines or follow us on
            our social networks.
            </p>
            <Link href="/contact/form"> 
                <button  variant="outline" size="lg" className="mb-16 bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Contact Form
                </button>
            </Link>
            <div className="flex justify-center space-x-8">
            <Image
                src="/logo-cerveceria-polar.png"
                alt=""
                width={120}
                height={120}
                className="rounded-full bg-white p-2"
            />
            <Image
                src="/logo-alimentos-polar.png"
                alt=""
                width={120}
                height={120}
                className="rounded-full bg-white p-2"
            />
            <Image
                src="/logo-pepsi-venezuela.png"
                alt=""
                width={120}
                height={120}
                className="rounded-full bg-white p-2"
            />
            </div>
        </div>
        </section>
    </>
  )
}

export default page
