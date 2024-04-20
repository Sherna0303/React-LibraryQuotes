import savecopyMapper from '../mappers/savecopy.mapper';
import { ICopySave } from '../models/copy-save.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';

export const saveCopyService = (credencials: ICopySave):Promise<boolean> => {
  const url = urls.saveCopy;
  const body = savecopyMapper.toApi(credencials);
  return http.post<{ name: string }>(url, body)
    .then((response) => {
      if (response.name) {
        return true;
      } else {
        return false;
      }
    });
};