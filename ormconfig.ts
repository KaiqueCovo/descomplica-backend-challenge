import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

const settings: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'descomplica',
  synchronize: true,
  logging: false,
  autoLoadEntities: true,
  migrations: ['src/modules/database/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/modules/database/migrations',
  },
};

module.exports = settings;
