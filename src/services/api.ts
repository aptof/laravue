import axios from "axios";
import type {
  Version,
  User,
  RegisterUser
} from '@/models';

export async function getVersion(): Promise<Version> {
  let response = await axios.get<Version>('api/version');
  return response.data;
}

export async function csrf() {
  await axios.get('sanctum/csrf-cookie');
}

export async function getUser() {
  return await axios.get('api/user');
}

export async function login(user: User) {
  return await axios.post('api/login', user);
}

export async function register(user: RegisterUser) {
  return await axios.post('api/register', user);
}