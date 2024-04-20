import copyListMapper from '../mappers/copyList.mapper';
import { ICopyList } from '../models/copy-list.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';
import { StorageService } from './general/storage.service';

export const calculatePriceCopyListService = (credencials: ICopyList[]):Promise<unknown> => {
  const storageService = new StorageService();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storageService.get('TOKEN')}`,
  };
  
  const url = urls.calculateListCopies;
  const body = copyListMapper.toApi(credencials);
  return http.post(url, headers,body);
};