import dynamic from 'next/dynamic'

const ImageSlider = dynamic(
  () => import('@/features/home/components/ImageSlider'),
)

const UsedRestoreSection = dynamic(
  () => import('@/features/home/components/UsedRestoredSection'),
)

const ProductCategory = dynamic (() => import('@/features/home/components/ProductCategory'))

export default function HomeContent() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex-1 min-h-[100px] bg-primary-800 text-white'>
        <ImageSlider />
      </div>
      <div className='flex-1 min-h-[100px]'>
        <UsedRestoreSection />
      </div>
      <div className='flex-1 min-h-[100px] bg-primary-800 text-white'>
        <ProductCategory />
      </div>
    </div>
  )
}
