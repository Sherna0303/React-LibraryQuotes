import copyListMapper from '../mappers/copyList.mapper';
import { ICopyList } from '../models/copy-list.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';

export const calculatePriceCopyListService = (credencials: ICopyList[]):Promise<unknown> => {

  const url = urls.calculateListCopies;
  const body = copyListMapper.toApi(credencials);
  return http.post(url, body);
};