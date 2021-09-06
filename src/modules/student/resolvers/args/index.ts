import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class StudentFilter {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  cpf?: string;
}
