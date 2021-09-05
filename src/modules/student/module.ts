import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './services/student';
import { DatabaseModule } from 'src/modules/database';
import { RedisCacheModule } from 'src/modules/redis/module';
import { Student } from 'src/modules/database/models/student';
import { StudentResolver } from './resolvers';

@Module({
  imports: [
    DatabaseModule,
    RedisCacheModule,
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
