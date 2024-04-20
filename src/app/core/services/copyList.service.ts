import { Copy } from '../models/copy';
import { urls } from '../resources/url.resource';
import http from './general/http.service';

export const copyListService = (): Promise<Copy[]> => {
  const url = urls.getAllCopies;
  return http.get(url);
};
