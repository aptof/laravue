export interface Version {
  laravel: string,
  php: string
}

export interface User {
  email: string
  password: string,
  remember: boolean
}

export interface RegisterUser {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}