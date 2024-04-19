import { environment } from '../enviroment/environment';

export const urls = {
  auth: `${environment.apiUrl}/auth/login`,
  register: `${environment.apiUrl}/auth/register`,
  verifyToken: `${environment.apiUrl}/auth/verifyToken`,
};