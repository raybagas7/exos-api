import { RegisterUser } from '../RegisterUser';

describe('a RegisterUser entities', () => {
  test('should create registerUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'exos-123',
      username: 'exogas',
      password: 'secretpass',
      profile_name: 'Exos Agas',
      profile_img: '',
      email: 'exogas@email.com',
    };

    // Action
    const registerUser = new RegisterUser(payload);

    // Assert
    expect(registerUser.id).toEqual(payload.id);
    expect(registerUser.username).toEqual(payload.username);
    expect(registerUser.password).toEqual(payload.password);
    expect(registerUser.profile_name).toEqual(payload.profile_name);
    expect(registerUser.profile_img).toEqual(payload.profile_img);
    expect(registerUser.email).toEqual(payload.email);
  });
});
