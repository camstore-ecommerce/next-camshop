import { Role, Status } from "@/utils/types"
import { InputProps } from "@nextui-org/input"
import { SelectProps } from "@nextui-org/react"

export const roles: {
  key: Role,
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

// 'active': For users who are currently active in the system.
// 'inactive': For users who have been deactivated but not removed.
// 'pending': For users who have registered but haven't completed all necessary steps.
// 'suspended': For users whose accounts have been temporarily disabled.
export const statuses: {
  key: Status,
  label: string
  color: SelectProps['color']
}[] = [
    {
      key: 'active',
      label: 'Active',
      color: 'success'
    },
    {
      key: 'inactive',
      label: 'Inactive',
      color: 'default'
    },
    {
      key: 'pending',
      label: 'Pending',
      color: 'warning'
    },
    {
      key: 'suspended',
      label: 'Suspended',
      color: 'danger'
    }
  ]

export const inputProps: InputProps = {
  variant: 'bordered',
  size: 'lg'
}
