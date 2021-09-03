import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student';
import { StudentService } from './services/student';
import { DatabaseModule } from 'src/modules/database';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
