import { InputProps } from "@nextui-org/input"

export const roles: {
  key: string,
  label: string
}[] = [
    {
      key: 'admin',
      label: 'Admin'
    },
    {
      key: 'user',
      label: 'User'
    }
  ]

export const genders: {
  key: string,
  label: string
}[] = [
    { key: 'male', label: 'Male' },
    { key: 'female', label: 'Female' },
  ]

export const statuses: {
  key: string,
  label: string
}[] = [
    {
      key: 'active',
      label: 'Active'
    },
    {
      key: 'deactive',
      label: 'Deactive'
    },
    {
      key: 'suspended',
      label: 'Suspended'
    },
    {
      key: 'pending',
      label: 'Pending'
    }
  ]


export const inputProps: InputProps = {
  variant: 'bordered',
  size: 'lg'
}
