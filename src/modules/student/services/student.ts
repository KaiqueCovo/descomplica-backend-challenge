import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/modules/database/models/student';
import { IStudent } from 'src/modules/database/interfaces/student';

@Injectable()
export class StudentService {
  public constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  public async list() {
    return this.studentRepository.find();
  }

  public async findById(id: number) {
    return this.studentRepository.findOne(id);
  }

  public async create(data: IStudent) {
    const user = this.studentRepository.create(data);
    return this.studentRepository.save(user);
  }
}
