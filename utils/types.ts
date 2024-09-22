import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  total_orders: number
  phone: string
  role: 'user' | 'admin'
  status: 'active' | 'deactive' | 'suspended' | 'pending'
}