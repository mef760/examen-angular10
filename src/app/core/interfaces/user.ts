import { Address } from "./address"
import { Company } from "./company"

export interface User {
    id: number
    name: string
    username: string
    phone: string
    website: string
    email: string
    company: Company
    address: Address
}