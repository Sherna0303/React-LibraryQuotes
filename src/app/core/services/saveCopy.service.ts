import savecopyMapper from '../mappers/save-copy.mapper';
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
  return http.post(url, headers, body)
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else if (response.status === 401){
        window.location.reload();
      }
      return false;
    });
};