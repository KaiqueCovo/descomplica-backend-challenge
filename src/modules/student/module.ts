import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student';
import { StudentService } from './services/student';
import { DatabaseModule } from 'src/modules/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/modules/database/models/student';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
