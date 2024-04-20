import authenticationMapper from '../mappers/authentication.mapper';
import { IUserCredentials } from '../models/user-credentials.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';
import { StorageService } from './general/storage.service';

export const authService = (credentials: IUserCredentials): Promise<boolean> => {
  const storageService = new StorageService();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storageService.get('TOKEN')}`,
  };

  const url = urls.auth;
  const body = authenticationMapper.toApi(credentials);
  return http.post<{ token: string }>(url, headers,body)
    .then((response) => {
      const storage = new StorageService();
      if (response.token) {
        storage.set('TOKEN', response.token);
        return true;
      } else {
        return false;
      }
    });
};
