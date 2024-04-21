import registerMapper from '../mappers/register.mapper';
import { IUserRegister } from '../models/user-register.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';
import { StorageService } from './general/storage.service';

export const registerService = (credencials: IUserRegister):Promise<boolean> => {
  const storageService = new StorageService();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storageService.get('TOKEN')}`,
  };

  const url = urls.register;
  const body = registerMapper.toApi(credencials);
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