// import { RegisterUser } from '../../../Domains/users/entities/RegisterUser';
import { UserRepository } from '../../../Domains/users/UserRepository';
import { RegisterUser } from '../../../Domains/users/entities/RegisterUser';
import { RegisteredUser } from '../../../Domains/users/entities/RegisteredUser';
import { PasswordHash } from '../../security/PasswordHash';
import { AddUserUseCase } from '../AddUserUseCase';

describe('first', () => {
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  class MockUsersRepository implements UserRepository {
    addUser(registerUser: RegisterUser): Promise<RegisteredUser> {
      throw new Error('Mothod not implemented!');
    }
    verifyAvailableUsername(username: string): Promise<boolean> {
      throw new Error('Method not implemented!');
    }
  }

  class MockPasswordHash implements PasswordHash {
    hash(password: string): Promise<string> {
      throw new Error('Method not implemented!');
    }
  }
  /* eslint-enable  @typescript-eslint/no-unused-vars */
  let mockUsersRepository: UserRepository;
  let mockPasswordHash: PasswordHash;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUsersRepository = new MockUsersRepository();
    mockPasswordHash = new MockPasswordHash();
  });

  test('should orchestrating the add user action correctly', async () => {
    // Arrabge
    const useCasePayload = {
      id: 'exos-123',
      username: 'exosagas',
      password: 'secretexos',
      profile_name: 'Agas',
      profile_img: '',
      email: 'exos@email.com',
    };

    const expectedRegisteredUser = new RegisteredUser({
      id: useCasePayload.id,
      username: useCasePayload.username,
      profile_name: useCasePayload.profile_name,
      profile_img: useCasePayload.profile_img,
      email: useCasePayload.email,
    });

    mockUsersRepository.verifyAvailableUsername = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    mockPasswordHash.hash = jest
      .fn()
      .mockImplementation(() => Promise.resolve('encrypted_password'));
    mockUsersRepository.addUser = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedRegisteredUser));

    const getUserUseCase = new AddUserUseCase({
      userRepository: mockUsersRepository,
      passwordHash: mockPasswordHash,
    });

    // Action
    const registeredUser = await getUserUseCase.execute(useCasePayload);
    // console.log(registeredUser);

    // Assert
    expect(registeredUser).toStrictEqual(expectedRegisteredUser);
    expect(mockUsersRepository.verifyAvailableUsername).toBeCalledWith(
      useCasePayload.username
    );
    expect(mockPasswordHash.hash).toBeCalledWith(useCasePayload.password);
    expect(mockUsersRepository.addUser).toBeCalledWith(
      new RegisterUser({
        id: useCasePayload.id,
        username: useCasePayload.username,
        password: 'encrypted_password',
        profile_name: useCasePayload.profile_name,
        profile_img: useCasePayload.profile_img,
        email: useCasePayload.email,
      })
    );
  });
});
