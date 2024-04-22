import { ICopySave } from '../models/copy-save.model';

export default {
  toApi: (credentials: ICopySave) => {
    return {
      Name: credentials.name,
      Author: credentials.author,
      Price: credentials.price,
      Type: credentials.type
    };
  }
};