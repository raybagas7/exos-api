import { RegisterUser } from './entities/RegisterUser';
import { RegisteredUser } from './entities/RegisteredUser';

export interface UserRepository {
  addUser(registerUser: RegisterUser): Promise<RegisteredUser>;
  verifyAvailableUsername(username: string): Promise<boolean>;
  // abstract getPasswordByUsername(username: string): Promise<string | null>;
  // abstract getIdByUsername(username: string): Promise<string | null>;
}
