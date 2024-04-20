import { ICopyList } from '../models/copy-list.model';

export default {
  toApi: (credentials: ICopyList[]) => {
    return {
      Copies: credentials.map(credential => ({
        Id: credential.id,
        Amount: credential.amount
      }))
    };
  }
};