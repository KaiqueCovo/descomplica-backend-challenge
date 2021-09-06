import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

import { Student } from '../../database/models/student';
import { StudentService } from './student';
import { RedisCacheService } from 'src/modules/redis/services/redis';
import { IStudent } from 'src/modules/database/interfaces/student';

describe('StudentService', () => {
  let service: StudentService;

  const mockCache = {
    get: jest.fn(),
    set: jest.fn(),
  };

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  const student: IStudent = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    cpf: '48740181812',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: getRepositoryToken(Student),
          useValue: mockRepository,
        },
        {
          provide: RedisCacheService,
          useValue: mockCache,
        },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should be list all students', async () => {
    mockRepository.find.mockReturnValue([student, student]);
    const result = await service.list(null);

    expect(result).not.toBeFalsy();
    expect(result).toHaveLength(2);
    expect(mockRepository.find).toHaveBeenCalledTimes(1);
  });

  it('Should be list all students from cache', async () => {
    mockCache.get.mockReturnValue([student, student]);
    const result = await service.list(null);

    expect(result).not.toBeFalsy();
    expect(result).toHaveLength(2);
    expect(mockCache.get).toHaveBeenCalledTimes(2);
  });

  it('Should be find student by id', async () => {
    mockRepository.findOne.mockReturnValue(student);
    const result = await service.findById(1);

    expect(result).not.toBeFalsy();
    expect(result).toMatchObject({ id: student.id });
    expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
  });

  it('Should be filter student', async () => {
    mockRepository.find.mockReturnValue([student]);

    const [result] = await service.list({
      name: 'John Doe',
      email: 'johndoe@example.com',
      cpf: '48740181812',
    });

    expect(result).not.toBeFalsy();
    expect(result).toMatchObject({
      name: student.name,
      email: student.email,
      cpf: student.cpf,
    });
    expect(mockRepository.find).toHaveBeenCalledTimes(2);
  });

  it('Should be create student', async () => {
    mockRepository.create.mockReturnValue(student);
    mockRepository.save.mockReturnValue(student);

    const result = await service.create(student);

    expect(result).not.toBeFalsy();
    expect(result).toMatchObject(student);
    expect(mockRepository.create).toHaveBeenCalledTimes(1);
    expect(mockRepository.save).toHaveBeenCalledTimes(1);
  });
});
