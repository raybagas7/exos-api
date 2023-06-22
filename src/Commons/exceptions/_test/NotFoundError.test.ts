import { NotFoundError } from '../NotFoundError';

describe('NotFoundError test', () => {
  test('should create an error as NotFoundError correctly', () => {
    const message = 'NotFoundError Error occurs';
    const notFoundError = new NotFoundError(message);

    expect(notFoundError.statusCode).toStrictEqual(404);
    expect(notFoundError.name).toStrictEqual('NotFoundError');
    expect(notFoundError.message).toStrictEqual(message);
  });
});
