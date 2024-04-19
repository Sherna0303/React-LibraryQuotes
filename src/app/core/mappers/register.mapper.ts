import { IUserRegister } from '../models/user-register.model';

export default {
  toApi: (credentials: IUserRegister) => {
    return {
      Name: credentials.name,
      Email: credentials.email,
      Password: credentials.password
    };
  }
};