import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student } from 'src/modules/database/models/student';
import { StudentService } from 'src/modules/student/services/student';
import { StudentInput } from './input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student])
  public async getStudents(): Promise<Student[]> {
    return this.studentService.list();
  }

  @Query(() => Student, { nullable: true })
  public async getStudent(@Args('id') id: number): Promise<Student> {
    return this.studentService.findById(id);
  }

  @Mutation(() => Student)
  public async createStudent(
    @Args('data') input: StudentInput,
  ): Promise<Student> {
    return this.studentService.create(input);
  }
}
