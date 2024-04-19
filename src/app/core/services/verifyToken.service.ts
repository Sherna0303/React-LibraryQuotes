import { urls } from '../resources/url.resource';
import http from './general/http.service';

export const verifyToken = ():Promise<boolean> => {
  const url = urls.verifyToken;
  return http.get<{ verify: string }>(url)
    .then((response) => {
      if (response.verify) {
        return true;
      } else {
        return false;
      }
    });
};