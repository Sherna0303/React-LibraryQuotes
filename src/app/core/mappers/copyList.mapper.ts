import { ICopyList } from '../models/copy-list.model';

export default {
  apiTo: (credentials: ICopyList) => {
    return {
      copyId: credentials.copyId,
      name: credentials.name,
      author: credentials.author,
      price: credentials.price,
      type: credentials.type
    };
  }
};