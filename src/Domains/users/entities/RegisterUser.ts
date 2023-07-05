export interface RegisterUserPayload {
  id: string;
  username: string;
  password: string;
  profile_name: string;
  profile_img: string;
  email: string;
}

export class RegisterUser {
  public id: string;
  public username: string;
  public password: string;
  public profile_name: string;
  public profile_img: string;
  public email: string;

  constructor(payload: RegisterUserPayload) {
    this._verifyPayload(payload);
    const { id, username, password, profile_name, profile_img, email } =
      payload;

    this.id = id;
    this.username = username;
    this.password = password;
    this.profile_name = profile_name;
    this.profile_img = profile_img;
    this.email = email;
  }

  private _verifyPayload(payload: RegisterUserPayload): void {
    const { id, username, password, profile_name, profile_img, email } =
      payload;

    if (
      !id ||
      !username ||
      !password ||
      !profile_name ||
      (!profile_img && profile_img !== '') ||
      !email
    ) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof username !== 'string' ||
      typeof password !== 'string' ||
      typeof profile_name !== 'string' ||
      typeof profile_img !== 'string' ||
      typeof email !== 'string'
    ) {
      throw new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (profile_name.length > 30) {
      throw new Error('REGISTER_USER.PROFILE_NAME_LIMIT_CHAR');
    }

    if (username.length > 50) {
      throw new Error('REGISTER_USER.USERNAME_LIMIT_CHAR');
    }

    if (!username.match(/^[\w]+$/)) {
      throw new Error('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
    }
  }
}
