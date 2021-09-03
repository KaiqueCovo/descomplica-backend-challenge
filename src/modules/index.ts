import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { StudentModule } from './student/module';

@Module({
  imports: [
    RouterModule.register([{ path: '/student', module: StudentModule }]),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    StudentModule,
  ],
})
export class ApplicationModule {}
