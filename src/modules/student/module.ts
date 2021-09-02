import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student';
import { StudentService } from './services/student';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
