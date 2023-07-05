import { UserRepository } from '../../Domains/users/UserRepository';
import {
  RegisterUser,
  RegisterUserPayload,
} from '../../Domains/users/entities/RegisterUser';
import { RegisteredUser } from '../../Domains/users/entities/RegisteredUser';
import { PasswordHash } from '../security/PasswordHash';

interface Dependency {
  userRepository: UserRepository;
  passwordHash: PasswordHash;
}

export class AddUserUseCase {
  private _userRepository: UserRepository;
  private _passwordHash: PasswordHash;

  constructor(dependency: Dependency) {
    this._userRepository = dependency.userRepository;
    this._passwordHash = dependency.passwordHash;
  }

  async execute(useCasePayload: RegisterUserPayload): Promise<RegisteredUser> {
    const registerUser = new RegisterUser(useCasePayload);
    await this._userRepository.verifyAvailableUsername(registerUser.username);
    registerUser.password = await this._passwordHash.hash(
      registerUser.password
    );
    return this._userRepository.addUser(registerUser);
  }
}
