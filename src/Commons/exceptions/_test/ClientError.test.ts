import { ClientError } from '../ClientError';

describe('ClientError test', () => {
  test('should throw error when directly use it', () => {
    expect(() => new ClientError('')).toThrowError(
      'cannot instantiate abstract class'
    );
  });
});
