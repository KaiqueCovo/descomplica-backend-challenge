import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/modules/database/models/student';

@Injectable()
export class StudentService {
  public constructor(
    @InjectRepository(Student)
    public readonly studentRepository: Repository<Student>,
  ) {}
}
