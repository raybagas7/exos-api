import { UserLogin } from '../UserLogin';

describe('a UserLogin entities', () => {
  test('should create UserLogin object correctly', () => {
    // Arrange
    const payload = {
      username: 'exosgas',
      password: 'secretexos',
    };

    // Action
    const userLogin = new UserLogin(payload);

    // Assert
    expect(userLogin).toBeInstanceOf(UserLogin);
    expect(userLogin.username).toEqual(payload.username);
    expect(userLogin.password).toEqual(payload.password);
  });
});
