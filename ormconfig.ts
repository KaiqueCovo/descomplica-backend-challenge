import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const settings: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'descomplica',

  synchronize: true,
  logging: false,
  migrations: ['src/modules/database/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/modules/database/migrations',
  },
};

module.exports = settings;
