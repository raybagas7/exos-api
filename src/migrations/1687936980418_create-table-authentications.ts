/* eslint-disable camelcase */
export {};
import { MigrationBuilder } from 'node-pg-migrate';

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable('authentications', {
    token: {
      type: 'TEXT',
      notNull: false,
    },
    owner: {
      type: 'VARCHAR(50)',
      notNull: true,
      unique: true,
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable('authentications');
};
