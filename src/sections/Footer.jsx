import React from 'react'
import { LiaFly } from 'react-icons/lia'

const Footer = () => {
  return (
    <>
       <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-teal-600 mb-4 flex items-center gap-2"><LiaFly fontSize={35} />Travel Memories</h3>
              <p className="text-sm text-gray-600">
                Creating unforgettable experiences and memories that last a lifetime.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-teal-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Subscribe</h4>
              <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for travel tips and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-md font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Travel Memories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
