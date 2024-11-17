import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


// --------- for USER -----------
export type Role = 'admin' | 'user'
export type Status = 'active' | 'inactive' | 'suspended' | 'pending'

export type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  total_orders: number
  phone: string
  role: Role
  status: Status
}