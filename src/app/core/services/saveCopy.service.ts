import savecopyMapper from '../mappers/savecopy.mapper';
import { ICopySave } from '../models/copy-save.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';
import { StorageService } from './general/storage.service';

export const saveCopyService = (credencials: ICopySave):Promise<boolean> => {
  const storageService = new StorageService();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storageService.get('TOKEN')}`,
  };

  const url = urls.saveCopy;
  const body = savecopyMapper.toApi(credencials);
  return http.post<{ name: string }>(url, headers, body)
    .then((response) => {
      if (response.name) {
        return true;
      } else {
        return false;
      }
    });
};