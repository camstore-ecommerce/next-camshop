'use client'

import { ImageSilder1, ImageSilder2 } from '@/constants/image.constant'
import { PADDING_CONTENT_X } from '@/constants/style.constant'
import Image from "next/image"
import { StaticImageData } from "next/image"
import { useEffect, useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

// Interface for image data
interface ImageData {
  src: StaticImageData
}

const images: ImageData[] = [
  {
    src: ImageSilder1,
  },
  {
    src: ImageSilder2,
  },
]

const TIME_INTERVAL = 5000

export default function ImageSlider() {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false)

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide()
      }, TIME_INTERVAL)

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval)
      }
    }
  }, [isHovered])

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true)
  }

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }

  return (
    (<div className={`md:${PADDING_CONTENT_X} relative w-full mt-4`}>
      <div
        className='relative h-[460px] group hover:-translate-y-2'
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          className='rounded-xl transition-all duration-500 ease-in-out cursor-pointer'
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
      <button
        className='absolute left-14 top-1/2 transform h-[459px] rounded-xl hover:bg-primary-700 mx-1 -mt-[10px] -translate-y-1/2 bg-primary-900 text-white p-2 group'
        onClick={prevSlide}
      >
        <FaChevronLeft className='text-gray-400 group-hover:text-white' />
      </button>
      <button
        className='absolute right-14 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group'
        onClick={nextSlide}
      >
        <FaChevronRight className='text-gray-400 group-hover:text-white' />
      </button>
      <div className='flex justify-center my-4'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? 'bg-primary-400 rounded-xl'
                : 'bg-default-50 rounded-xl'
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>)
  );
}
