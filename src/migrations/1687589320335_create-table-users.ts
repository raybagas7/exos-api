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
    email: {
      type: 'CITEXT',
      unique: true,
      notNull: true,
    },
    last_login: {
      type: 'TIMESTAMP',
    },
    is_login: {
      type: 'BOOLEAN',
      default: 'false',
      notNull: true,
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  // Check if the extension exists before creating it
  const extensionExists = pgm.db.query(
    'SELECT * FROM pg_extension WHERE extname = $1',
    ['citext']
  );

  if (!extensionExists) {
    pgm.createExtension('citext');
    console.log('The "citext" extension was installed successfully.');
  } else {
    console.log('The "citext" extension is already installed.');
  }
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable('users');
  pgm.dropExtension('citext');
};
