'use client'

import { ImageUsedRestore } from '@/features/home/constants/image.constant'
import { PADDING_CONTENT_X } from '@/constants/style.constant'
import { Button } from '@nextui-org/button'
import Image from 'next/image'

export default function UsedRestoreSection(): JSX.Element {
  return (
    <div className={`flex md:h-96 md:${PADDING_CONTENT_X}`}>
      <div className='flex flex-col justify-center gap-4 items-center flex-1 rounded-l-xl bg-primary-800 text-foreground-50'>
        <h1 className='font-bold text-4xl text-center'>
          Used & Restored Film Cameras & Lenses
        </h1>

        <div className='flex gap-8'>
          <Button radius='sm' className='text-xl py-6 px-10' color='primary'>
            View cameras
          </Button>
          <Button
            radius='sm'
            className='text-xl py-6 px-12'
            color='primary'
            variant='ghost'
          >
            Sell
          </Button>
        </div>

        <p className='text-center text-xl w-3/4'>
          Explore the largest selection of preowned photography gear you can
          trust.
        </p>
      </div>
      <div className='flex-1 relative rounded-r-lg'>
        <Image
          alt='Used and Restored'
          src={ImageUsedRestore.src}
          style={{
            borderTopRightRadius: '0.75rem',
            borderBottomRightRadius: '0.75rem',
          }}
          fill
        />
      </div>
    </div>
  )
}
