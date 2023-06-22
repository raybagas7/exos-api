import { AuthorizationError } from '../AuthorizationError';

describe('AuthorizationError test', () => {
  test('should create an error as AuthorizationError correctly', () => {
    const message = 'AuthorizationError Error occurs';
    const authorizationError = new AuthorizationError(message);

    expect(authorizationError.statusCode).toStrictEqual(403);
    expect(authorizationError.name).toStrictEqual('AuthorizationError');
    expect(authorizationError.message).toStrictEqual(message);
  });
});
