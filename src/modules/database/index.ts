import {
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as ormConfig from 'ormconfig';
import { Connection, getConnectionManager } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
      migrations: [],
    } as TypeOrmModuleOptions),
  ],
})
export class DatabaseModule
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private connection: Connection;

  public async onApplicationBootstrap() {
    const connectionManager = getConnectionManager();
    if (connectionManager.has('default')) {
      this.connection = connectionManager.get('default');
      await this.connection.runMigrations({
        transaction: 'all',
      });
      console.log('DATABASE READY');
    }
  }

  public async onApplicationShutdown() {
    await this.connection.close();
  }
}
