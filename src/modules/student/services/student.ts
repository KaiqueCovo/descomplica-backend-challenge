import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/modules/database/models/student';
import { IStudent } from 'src/modules/database/interfaces/student';
import { RedisCacheService } from 'src/modules/redis/services/redis';

@Injectable()
export class StudentService {
  public constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    private readonly cacheService: RedisCacheService,
  ) {}

  public async list(): Promise<Student[]> {
    const studentsCache = (await this.cacheService.get(
      'students',
    )) as Student[];

    if (studentsCache) return studentsCache;

    const students = await this.studentRepository.find();

    this.cacheService.set('students', students);

    return students;
  }

  public async findById(id: number) {
    return this.studentRepository.findOne(id);
  }

  public async create(data: IStudent): Promise<Student> {
    const student = this.studentRepository.create(data);
    const newStudent = await this.studentRepository.save(student);

    const studentsCache = (await this.cacheService.get(
      'students',
    )) as Student[];

    if (studentsCache) {
      await this.cacheService.set('students', [...studentsCache, newStudent]);
    }

    return student;
  }
}
