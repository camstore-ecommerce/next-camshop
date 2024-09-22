import { Users } from '@/utils/data-example'
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/table'
import { user } from '@nextui-org/theme'

const columns = [
  { label: 'ID', key: 'id' },
  { label: 'NAME', key: 'name' },
  { label: 'ROLE', key: 'role' },
  { label: 'EMAIL', key: 'email' },
  { label: 'TOTAL ORDERS', key: 'total_orders' },
  { label: 'PHONE', key: 'phone' },
  { label: 'STATUS', key: 'status' }
]

// Concat string first_name and last_name to Name
const userWithFullName = Users.map(user => ({
  ...user,
  name: `${user.first_name} ${user.last_name}`
}))

export default function UsersTable () {
  return (
    <Table aria-label='Example table with dynamic content'>
      <TableHeader columns={columns}>
        {column => (
          <TableColumn
            align={column.key === 'total_orders' ? 'center' : 'start'}
            key={column.key}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No users to display.'} items={userWithFullName}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
