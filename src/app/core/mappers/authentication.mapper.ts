import { IUserCredentials } from '../models/user-credentials.model';

export default {
  toApi: (credentials: IUserCredentials) => {
    return {
      Email: credentials.userName,
      Password: credentials.password
    };
  }
};