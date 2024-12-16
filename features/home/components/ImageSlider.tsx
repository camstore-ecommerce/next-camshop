'use client'

import {
  ImageSlider1,
  ImageSlider2,
  ImageSlider3,
  ImageSlider4,
  ImageSlider5,
  ImageSlider6,
} from '@/features/home/constants/image.constant'
import { PADDING_CONTENT_X } from '@/constants/style.constant'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import { Image as NextUIImage } from '@nextui-org/react'
import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

// Interface for image data
interface ImageData {
  src: StaticImageData
}

const images: ImageData[] = [
  {
    src: ImageSlider1,
  },
  {
    src: ImageSlider2,
  },
  {
    src: ImageSlider3,
  },
  {
    src: ImageSlider4,
  },
  {
    src: ImageSlider5,
  },
  {
    src: ImageSlider6,
  },
]

const TIME_INTERVAL = 4000

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
    <div className={`md:${PADDING_CONTENT_X} relative w-full mt-4`}>
      <div
        className='relative h-[460px] group overflow-clip  rounded-xl'
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <NextUIImage
          as={Image}
          src={images[currentIndex].src.src}
          alt={`Slider Image ${currentIndex + 1}`}
          className='transition-all duration-500 ease-in-out'
          fill
          isBlurred
          isZoomed
          sizes='100vw'
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <Button
        size='sm'
        isIconOnly
        className='absolute left-12 top-1/2 transform h-fit w-fit p-3 rounded-full -mt-[10px] -translate-y-1/2 bg-default-50 text-white group hover:-translate-x-2'
        onClick={prevSlide}
      >
        <FaChevronLeft
          size={24}
          className='text-foreground-500 group-hover:text-foreground-700'
        />
      </Button>
      <Button
        size='sm'
        isIconOnly
        className='absolute right-12 top-1/2 transform h-fit w-fit p-3 rounded-full -mt-[10px] -translate-y-1/2 bg-default-50 text-white group hover:translate-x-2'
        onClick={nextSlide}
      >
        <FaChevronRight
          size={24}
          className='text-foreground-500 group-hover:text-foreground-700'
        />
      </Button>
      <div className='flex justify-center my-4'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1
              ${
                index === currentIndex
                  ? 'bg-primary-400 rounded-xl'
                  : 'bg-default-50 rounded-xl'
              }
            transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  )
}
