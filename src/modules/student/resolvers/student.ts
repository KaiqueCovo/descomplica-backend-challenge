import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student } from 'src/modules/database/models/student';
import { StudentService } from 'src/modules/student/services/student';
import { StudentInput } from './input/student';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student])
  public async getStudents(): Promise<Student[]> {
    return this.studentService.studentRepository.find();
  }

  @Query(() => Student, { nullable: true })
  public async getStudent(@Args('id') id: number): Promise<Student> {
    return this.studentService.studentRepository.findOne(id);
  }

  @Mutation(() => Student)
  public async createStudent(
    @Args('data') input: StudentInput,
  ): Promise<Student> {
    const { name, email, cpf } = input;
    const user = this.studentService.studentRepository.create({
      name,
      email,
      cpf,
    });
    return this.studentService.studentRepository.save(user);
  }
}
