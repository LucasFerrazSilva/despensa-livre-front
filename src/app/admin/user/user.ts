import { Condominium } from '../condominium/condominium';

export interface User {
  id: number;
  condominium: Condominium;
  name: string;
  email: string;
  password: string;
}