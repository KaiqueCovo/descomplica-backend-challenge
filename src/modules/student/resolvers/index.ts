import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Student } from 'src/modules/database/models/student';
import { StudentService } from 'src/modules/student/services/student';

import { StudentFilter } from './args';
import { StudentInput } from './input';

export const pubSub = new PubSub();

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student])
  public async getStudents(@Args() filter: StudentFilter): Promise<Student[]> {
    return this.studentService.list(filter);
  }

  @Query(() => Student, { nullable: true })
  public async getStudent(@Args('id') id: number): Promise<Student> {
    return this.studentService.findById(id);
  }

  @Mutation(() => Student)
  public async createStudent(
    @Args('data') input: StudentInput,
  ): Promise<Student> {
    const student = await this.studentService.create(input);

    pubSub.publish('studentAdded', { studentAdded: student });

    return student;
  }

  @Subscription(() => Student)
  studentAdded() {
    return pubSub.asyncIterator('studentAdded');
  }
}
