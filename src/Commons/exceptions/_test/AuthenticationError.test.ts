import { AuthenticationError } from '../AuthenticationError';

describe('AuthenticationError test', () => {
  test('should create an error as AuthenticationError correctly', () => {
    const message = 'AuthenticationError Error occurs';
    const authenticationError = new AuthenticationError(message);

    expect(authenticationError.statusCode).toStrictEqual(401);
    expect(authenticationError.name).toStrictEqual('AuthenticationError');
    expect(authenticationError.message).toStrictEqual(message);
  });
});
