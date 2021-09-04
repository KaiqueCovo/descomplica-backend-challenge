import { Module } from '@nestjs/common';
import { StudentService } from './services/student';
import { DatabaseModule } from 'src/modules/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/modules/database/models/student';
import { StudentResolver } from './resolvers';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Student])],
  controllers: [],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
