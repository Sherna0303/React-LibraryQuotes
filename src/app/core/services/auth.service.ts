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
  return http.post(url, headers,body)
    .then(async (response) => {
      const storage = new StorageService();
      if (response.status === 200) {
        const responseBody = await response.json(); 
        if (responseBody.token) {
          const token = responseBody.token; 
          storage.set('TOKEN', token);
          return true;
        }
      } else if (response.status === 401){
        window.location.reload();
      }
      return false;
    });
};
