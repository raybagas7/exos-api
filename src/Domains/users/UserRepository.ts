import { RegisterUser } from './entities/RegisterUser';

export abstract class UserRepository {
  abstract addUser(registerUser: RegisterUser): Promise<void>;
  abstract verifyAvailableUsername(username: string): Promise<boolean>;
  abstract getPasswordByUsername(username: string): Promise<string | null>;
  abstract getIdByUsername(username: string): Promise<string | null>;
}
