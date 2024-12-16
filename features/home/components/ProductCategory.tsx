import { PADDING_CONTENT_X } from '@/constants/style.constant'
import Image from 'next/image'
import {
  CameraCategory,
  FilmCategory,
  LenCategory,
  NewCameraCategory,
} from '@/features/home/constants/image.constant'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import ItemCategory from '@/model/item-category.model'
import { EPageHref, EPageLabel } from '@/enum/page.enum'

const ITEM_CATEGORY: ItemCategory[] = [
  {
    src: CameraCategory,
    alt: EPageLabel.Cameras,
    href: EPageHref.Cameras,
    name: EPageLabel.Cameras,
  },
  {
    src: LenCategory,
    alt: EPageLabel.Lenses,
    href: EPageHref.Lenses,
    name: EPageLabel.Lenses,
  },
  {
    src: FilmCategory,
    alt: EPageLabel.Film,
    href: EPageHref.Film,
    name: EPageLabel.Film,
  },
  {
    src: NewCameraCategory,
    alt: 'Digital Ca',
    href: '/lenses',
    name: 'Lenses',
  },
  {
    src: LenCategory,
    alt: 'Lenses',
    href: '/lenses',
    name: 'Lenses',
  },
]

export default function ProductCategory(): JSX.Element {
  return (
    <div
      className={`w-full md:h-[25rem] md:${PADDING_CONTENT_X} flex gap-4 py-4`}
    >
      {ITEM_CATEGORY.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.href}
            className='flex-1 rounded-lg flex flex-col overflow-hidden'
          >
            <Image
              alt={item.alt}
              src={item.src}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '80%',
                width: 'auto',
              }}
            />
            <div className='h-[20%] bg-foreground-50 flex gap-2 justify-center items-center'>
              <h3 className='text-primary-800 font-bold text-xl'>
                {item.name}
              </h3>
              <FaArrowRight className='text-primary-800 text-xl' />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
