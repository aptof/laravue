import axios from "axios";
import type { Version } from '@/models';

export async function getVersion(): Promise<Version> {
  let response = await axios.get<Version>('api/version');
  return response.data;
}

export async function getUser() {
  return await axios.get('api/user');
}