import { Copy } from '../models/copy.model';

export default {
  toApi: (credentials: Copy[], budget: number) => {
    return {
      Budget: budget,
      ClientCopies: {
        Copies: credentials.map(credential => ({
          Id: credential.copyId
        }))
      }
    };
  }
};