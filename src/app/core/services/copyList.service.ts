import { Copy } from '../models/copy.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';
import { StorageService } from './general/storage.service';

export const copyListService = (): Promise<Copy[]> => {
  const storageService = new StorageService();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storageService.get('TOKEN')}`,
  };
  const url = urls.getAllCopies;
  return http.get(url, headers)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 401){
        window.location.reload();
      }
    });
};
