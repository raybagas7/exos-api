export interface RegisteredUserPayload {
  id: string;
  username: string;
  profile_name: string;
  profile_img: string;
  email: string;
}

export class RegisteredUser {
  public id: string;
  public username: string;
  public profile_name: string;
  public profile_img: string;
  public email: string;

  constructor(payload: RegisteredUserPayload) {
    this._verifyPayload(payload);
    const { id, username, profile_name, profile_img, email } = payload;

    this.id = id;
    this.username = username;
    this.profile_name = profile_name;
    this.profile_img = profile_img;
    this.email = email;
  }

  private _verifyPayload(payload: RegisteredUserPayload): void {
    const { id, username, profile_name, profile_img, email } = payload;
    if (
      !id ||
      !username ||
      !profile_name ||
      (!profile_img && profile_img !== '') ||
      !email
    ) {
      throw new Error('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof username !== 'string' ||
      typeof profile_name !== 'string' ||
      typeof profile_img !== 'string' ||
      typeof email !== 'string'
    ) {
      throw new Error('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}
