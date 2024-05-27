import { IUserCredentials } from '../models/user-credentials.model';

export default {
  toApi: (credentials: IUserCredentials) => {
    return {
      Email: credentials.email,
      Password: credentials.password
    };
  }
};