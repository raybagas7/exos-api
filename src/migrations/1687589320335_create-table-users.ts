/* eslint-disable camelcase */
export {};
import { MigrationBuilder } from 'node-pg-migrate';

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable('users', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    search_id: {
      type: 'SERIAL',
      unique: true,
      notNull: true,
    },
    username: {
      type: 'VARCHAR(50)',
      unique: true,
      notNull: true,
    },
    password: {
      type: 'TEXT',
      notNull: true,
    },
    profile_name: {
      type: 'TEXT',
      notNull: true,
    },
    profile_img: {
      type: 'TEXT',
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createExtension('citext');
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable('users');
  pgm.dropExtension('citext');
};
