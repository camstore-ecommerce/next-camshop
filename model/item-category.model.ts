import { StaticImageData } from 'next/image'

export default interface ItemCategory {
  src: StaticImageData
  alt: string
  href: string
  name: string
}
