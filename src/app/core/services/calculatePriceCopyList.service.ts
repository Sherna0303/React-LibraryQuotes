import copyListMapper from '../mappers/copy-list.mapper';
import { CopyListDetail } from '../models/copy-list-price-response.model';
import { Copy } from '../models/copy.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';
import { StorageService } from './general/storage.service';

export const calculatePriceCopyListService = (credencials: Copy[]):Promise<CopyListDetail> => {
  const storageService = new StorageService();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storageService.get('TOKEN')}`,
  };
  
  const url = urls.calculateListCopies;
  const body = copyListMapper.toApi(credencials);
  return http.post(url, headers,body)
    .then(async (response) => {
      if (response.status === 200) {
        const responseBody = await response.json();
        console.log(responseBody); 
        return responseBody;
      } else if (response.status === 401){
        window.location.reload();
      }
      return false;
    });
};