import { InvariantError } from '../InvariantError';

describe('InvariantError test', () => {
  test('should create an error as InvariantError correctly', () => {
    const message = 'Invariant Error occurs';
    const invariantError = new InvariantError(message);

    expect(invariantError.name).toStrictEqual('InvariantError');
    expect(invariantError.statusCode).toStrictEqual(400);
    expect(invariantError.message).toStrictEqual(message);
  });
});
