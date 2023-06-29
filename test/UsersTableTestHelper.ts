import { pool } from '../src/Infrastructures/databases/postgres/pool';
import { RegisterUser } from '../src/Domains/users/entities/RegisterUser';

export const UsersTableTestHelper = {
  async addUser(user: RegisterUser) {
    const {
      id = 'exos-123',
      username = 'ray_bagas',
      password = 'secret',
      profile_name = 'Agas',
      profile_img = '',
      email = 'exos.gas@gmail.com',
    } = user;

    const query = {
      text: `INSERT INTO users (id, search_id, username, password, profile_name, profile_img, email) 
      VALUES($1, nextval('search_id_sequences'), $2, $3, $4, $5, $6)`,
      values: [id, username, password, profile_name, profile_img, email],
    };

    await pool.query(query);
  },

  async cleanTable() {
    await pool.query('TRUNCATE TABLE users');
  },
};
