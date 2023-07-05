import { RegisteredUser } from '../RegisteredUser';

describe('a RegisteredUser entitie', () => {
  test('should create registeredUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'exos-123',
      username: 'exogas',
      profile_name: 'Exos Agas',
      profile_img: '',
      email: 'exogas@email.com',
    };

    // Action
    const registeredUser = new RegisteredUser(payload);

    // Assert
    expect(registeredUser.id).toEqual(payload.id);
    expect(registeredUser.username).toEqual(payload.username);
    expect(registeredUser.profile_name).toEqual(payload.profile_name);
    expect(registeredUser.profile_img).toEqual(payload.profile_img);
    expect(registeredUser.email).toEqual(payload.email);
  });
});
