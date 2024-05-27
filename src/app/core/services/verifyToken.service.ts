import { urls } from '../resources/url.resource';
import http from './general/http.service';
import { StorageService } from './general/storage.service';

export const verifyToken = ():Promise<boolean> => {
  const storageService = new StorageService();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storageService.get('TOKEN')}`,
  };

  const url = urls.verifyToken;
  return http.get(url, headers)
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    });
};