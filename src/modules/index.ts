import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { StudentModule } from './student/module';

@Module({
  imports: [
    RouterModule.register([{ path: '/student', module: StudentModule }]),
    StudentModule,
  ],
})
export class ApplicationModule {}
