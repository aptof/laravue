import axios from "axios";
import routes from "./routes";
import type {
  Version,
  User,
  RegisterUser,
  AuthenticatedUser,
  ResetUser
} from '@/models';

export async function getVersion(): Promise<Version> {
  let response = await axios.get<Version>(routes.version());
  return response.data;
}

export async function csrf() {
  await axios.get(routes.csrf());
}

export async function getUser() {
  return await axios.get<AuthenticatedUser>(routes.user());
}

export async function login(user: User) {
  return await axios.post(routes.login(), user);
}

export async function register(user: RegisterUser) {
  return await axios.post(routes.register(), user);
}

export async function logout() {
  return await axios.post(routes.logout());
}

export async function reset(user: ResetUser) {
  return await axios.post(routes.resetPassword(), user);
}

export async function forgot(email:string) {
  return await axios.post(routes.forgotPassword(), {email});
}