import React from 'react'
import { useRef, useState, useEffect } from "react"
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

const Places = () => {
    const scrollContainerRef = useRef(null)
    const [activeDot, setActiveDot] = useState(0)
  
    const destinations = [
      { name: "Paris", image: "/img1.jpg" },
      { name: "London", image: "/img2.jpg" },
      { name: "New York", image: "/img3.jpg" },
      { name: "Tokyo", image: "/img4.jpg" },
      { name: "Dubai", image: "/img5.jpg" },
      { name: "Sydney", image: "/img6.jpg" },
      { name: "Barcelona", image: "/img7.jpg" },
      { name: "Rome", image: "/img1.jpg" },
      { name: "Berlin", image: "/img2.jpg" },
      { name: "Amsterdam", image: "/img3.jpg" },
      { name: "Singapore", image: "/img4.jpg" },
      { name: "Hong Kong", image: "/img5.jpg" },
    ]
  
    const getNumberOfPages = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 768) {
          return Math.ceil(destinations.length / 7) 
        } else {
          return Math.ceil(destinations.length / 3) 
        }
      }
      return 4 
    }
  
    const numberOfPages = getNumberOfPages()
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.clientWidth
        scrollContainerRef.current.scrollBy({
          left: containerWidth,
          behavior: "smooth",
        })
  
        const newActiveDot = Math.min(activeDot + 1, numberOfPages - 1)
        setActiveDot(newActiveDot)
      }
    }
  
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.clientWidth
        scrollContainerRef.current.scrollBy({
          left: -containerWidth,
          behavior: "smooth",
        })
  
        const newActiveDot = Math.max(activeDot - 1, 0)
        setActiveDot(newActiveDot)
      }
    }
  
    const scrollToPage = (pageIndex) => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.clientWidth
        scrollContainerRef.current.scrollTo({
          left: containerWidth * pageIndex,
          behavior: "smooth",
        })
        setActiveDot(pageIndex)
      }
    }
  
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        const scrollProgress = scrollLeft / (scrollWidth - clientWidth)
        const newActiveDot = Math.min(Math.floor(scrollProgress * numberOfPages), numberOfPages - 1)
  
        if (newActiveDot !== activeDot) {
          setActiveDot(newActiveDot)
        }
      }
    }
  
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current
      if (scrollContainer) {
        scrollContainer.addEventListener("scroll", handleScroll)
        return () => scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }, [activeDot])
  return (
    <>
          <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Trending Destinations</h2>
          <a href="#" className="text-sm text-teal-600 flex items-center">
            See more places <IoChevronForwardOutline className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 scrollbar-hide gap-6"
            style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {destinations.map((destination, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-2">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{destination.name}</span>
              </div>
            ))}
          </div>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10 hover:bg-gray-100"
            aria-label="Scroll left"
            disabled={activeDot === 0}
          >
            <IoChevronBackSharp className={`text-2xl ${activeDot === 0 ? "text-gray-300" : "text-gray-600"}`} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10 hover:bg-gray-100"
            aria-label="Scroll right"
            disabled={activeDot === numberOfPages - 1}
          >
            <IoChevronForwardOutline
              className={`h-6 w-6 ${activeDot === numberOfPages - 1 ? "text-gray-300" : "text-gray-600"}`}
            />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {Array.from({ length: numberOfPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === activeDot ? "bg-teal-600 w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Plan your perfect trip</h2>
          <a href="#" className="text-sm text-teal-600 flex items-center">
            See more places <IoChevronForwardOutline className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Los Angeles", image: "/img1.jpg" },
            { name: "Morocco", image: "/img4.jpg" },
            { name: "Mexico", image: "/img8.jpg" },
          ].map((destination, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden h-64">
              <img
                src={destination.image || "/img10.svg"}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="relative rounded-lg overflow-hidden h-80">
          <img src="/img9.jpg" alt="Plan your trip" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Trip</h2>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-medium flex items-center gap-2">
              <span>Explore Now</span>
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Places
