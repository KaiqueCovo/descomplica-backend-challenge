import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

import {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_DB,
} from './src/settings';

console.log(DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD);

const settings: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_DB,
  synchronize: true,
  logging: false,
  autoLoadEntities: true,
  migrations: ['src/modules/database/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/modules/database/migrations',
  },
};

module.exports = settings;
