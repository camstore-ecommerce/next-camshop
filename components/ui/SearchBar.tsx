import { SearchIcon } from '@/components/icons'
import { Input } from '@nextui-org/input'

export default function SearchBar ({
  size = 'md' as 'md' | 'sm' | 'lg' | undefined,
  placeholder = 'Search...'
}: {
  size: 'md' | 'sm' | 'lg' | undefined
  placeholder: string
}) {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      startContent={<SearchIcon className='text-default-400' />}
    />
  )
}
