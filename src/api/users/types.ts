import { Model, Document } from "mongoose"

interface User {
  firstName: string
  lastName: string
  password: string
  email: string
  role: "User" | "Admin"
}

export interface UserDocument extends User, Document {}

export interface UserModel extends Model<UserDocument> {
  checkCredentials(email: string, password: string): Promise<UserDocument | null>
}
export interface UserInterface {
  _id: string
  name: string
  avatar: string
  email: string
  password: string
  role: string
  timestamps: boolean
}

export interface AccommodationInterface {
  host: UserInterface
  name: string
  maxGuests: number
  description: string
  city: string
}
