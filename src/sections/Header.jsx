import React, { useState, useEffect } from 'react'
import { IoIosAirplane, IoIosSend } from "react-icons/io"
import { LiaFly } from "react-icons/lia"
import { FaChevronDown } from "react-icons/fa"
import { HiOutlineMapPin } from "react-icons/hi2"
import { IoSearch } from "react-icons/io5"
import { IoCalendarNumberOutline } from "react-icons/io5"
import { PiUsersThree } from "react-icons/pi"
import { HiMenu, HiX } from "react-icons/hi"
// import { FiChevronRight } from "react-icons/fi"

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(false)
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      const drawer = document.getElementById('mobile-drawer')
      const hamburger = document.getElementById('hamburger-button')
      
      if (isDrawerOpen && drawer && !drawer.contains(event.target) && !hamburger.contains(event.target)) {
        setIsDrawerOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDrawerOpen])
  
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isDrawerOpen])

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0">
          <img src="/hero1.jpg" alt="Wooden boat on a lake" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <header className="container relative z-20 mx-auto px-4 py-4 flex items-center justify-between text-white">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <LiaFly fontSize={35} />
            Travel Memories
          </h1>
          <nav className="hidden md:flex space-x-6">
            {["Home", "About Us", "Destinations", "Packages"].map((item, index) => (
              <div key={index} className="group relative mr-6 p-1 cursor-pointer transition-all duration-300">
                <a href="/">
                  <span className="text-sm font-medium">{item}</span>
                </a>
                <div className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:left-0 group-hover:w-full"></div>
              </div>
            ))}
            <div className="relative mt-2">
              <button 
                onClick={() => setShowDropdown(!showDropdown)} 
                className="text-sm font-medium flex items-center cursor-pointer"
              >
                More <FaChevronDown className={`ml-1 h-4 w-4 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
              </button>
              {showDropdown && (
                <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-700 z-50">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Blog
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Gallery
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Reviews
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    FAQ
                  </a>
                </div>
              )}
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm font-medium hidden md:block">
              Contact Us
            </a>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign In
            </button>
            
            <button 
              id="hamburger-button"
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-label="Toggle menu"
            >
              {isDrawerOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </header>
        
        <div 
          id="mobile-drawer"
          className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2 text-teal-600">
                <LiaFly fontSize={24} />
                <span className="font-bold">Travel Memories</span>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <nav className="px-4 py-2">
                <ul className="space-y-1">
                  {["Home", "About Us", "Destinations", "Packages"].map((item, index) => (
                    <div key={index} className="group relative mr-6 p-1 cursor-pointer transition-all duration-300">
                    <a href="/">
                      <span className="text-sm font-medium">{item}</span>
                    </a>
                    <div className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:left-0 group-hover:w-full"></div>
                  </div>
                  ))}
                  
                  <li>
                    <button 
                      onClick={() => setMobileDropdown(!mobileDropdown)}
                      className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      <span className='text-sm font-medium'>More</span>
                      <FaChevronDown className={`h-3 w-3 text-gray-400 transition-transform ${mobileDropdown ? "rotate-180" : ""}`} />
                    </button>
                    
                    {mobileDropdown && (
                      <ul className="pl-4 mt-1 space-y-1 border-l-2 border-gray-200 ml-2">
                        {["Blog", "Gallery", "Reviews", "FAQ"].map((item, index) => (
                          <li key={index}>
                            <a 
                              href="#" 
                              className="flex items-center py-2 px-2 text-gray-600 hover:text-teal-600 text-sm"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  
                  <li>
                    <a 
                      href="#" 
                      className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      <span className='text-sm font-medium'>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div className="p-4 border-t">
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
            </div>
          </div>
        </div>
        
        {isDrawerOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}

        <div className="relative container mx-auto px-4 h-[500px] flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">MEMORIES MADE FOREVER</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Rest, Explore and Experience the Beauty of our World's most beautiful places.
          </p>
        </div>
      </div>
      
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex border-b-4 border-teal-600 w-fit py-2 mb-6">
              <IoIosAirplane fontSize={25} className="text-teal-600" />
              <p className="font-semibold ml-2">Booking</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <HiOutlineMapPin className="text-xl mr-1 text-teal-600" /> Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full h-10 px-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                  <IoSearch className="absolute left-2 top-2.5 text-2xl text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <IoCalendarNumberOutline className="text-xl mr-1 text-teal-600" /> Check In
                </label>
                <input
                  type="date"
                  placeholder="Add date"
                  className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <IoCalendarNumberOutline className="text-xl mr-1 text-teal-600" /> Check Out
                </label>
                <input
                  type="date"
                  placeholder="Add date"
                  className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <PiUsersThree className="text-2xl mr-1 text-teal-600" /> Travelers
                </label>
                <select className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4+ Passengers</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full h-10 flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium">
                  <IoIosSend fontSize={20} />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
