

import Form from './Form'


const ExternalLink = ({ children, hoverColor = "text-teal-800", href }) =>
  <a
    className={`underline hover:${hoverColor} transition-all`}
    href={href}
    target="_blank"
  >
    {children}
  </a>

export default function FormPage() {
  return (
    <div className=" bg-white">
      
        {/* Contact section */}
        <section className="relative bg-white pb-24" aria-labelledby="contactHeading">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contactHeading" className="sr-only">
                Contact us
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </div>
  )
}