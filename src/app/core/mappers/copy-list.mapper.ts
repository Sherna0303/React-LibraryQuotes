import { Copy } from '../models/copy.model';

export default {
  toApi: (credentials: Copy[]) => {
    return {
      Copies: credentials.map(credential => ({
        Id: credential.copyId,
        Amount: credential.quantity
      }))
    };
  }
};