export interface UserLoginDto {
  email: string
  password: string
}


export interface UserInfo {
  email: string
  displayName: string
  token: string
}

export interface UserRegisterDto {
  displayName: string
  email: string
  password: string
  confirmPass:string
}

export interface UserAddressDto {
  id: number
  firstName: string
  lastName: string
  street: string
  city: string
  zipCode: string
  state: string
}
