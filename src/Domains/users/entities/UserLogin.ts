interface UserLoginPayload {
  username: string;
  password: string;
}

export class UserLogin {
  public username: string;
  public password: string;
  constructor(public payload: UserLoginPayload) {
    this._verifyPayload(payload);
    const { username, password } = payload;

    this.username = username;
    this.password = password;
  }

  private _verifyPayload(payload: UserLoginPayload) {
    const { username, password } = payload;

    if (!username || !password) {
      throw new Error('USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof username !== 'string' || typeof password !== 'string') {
      throw new Error('USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}
