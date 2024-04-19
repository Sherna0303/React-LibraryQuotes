import registerMapper from '../mappers/register.mapper';
import { IUserRegister } from '../models/user-register.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';
import { StorageService } from './general/storage.service';

export const registerService = (credencials: IUserRegister):Promise<boolean> => {
  const url = urls.register;
  const body = registerMapper.toApi(credencials);
  return http.post<{ token: string }>(url, body)
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