import SearchIcon from '@/components/icons/SearchIcon'
import { Input } from '@nextui-org/input'

export default function SearchBar({
  value = '',
  size = 'md' as 'md' | 'sm' | 'lg' | undefined,
  placeholder = 'Search...',
}: {
  value?: string | ''
  size: 'md' | 'sm' | 'lg' | undefined
  placeholder: string

  onValueChange?: (value: string) => void
}) {
  return (
    <Input
      value={value}
      size={size}
      placeholder={placeholder}
      startContent={<SearchIcon className='text-default-400' size={10} />}
    />
  )
}
