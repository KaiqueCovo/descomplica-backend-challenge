import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StudentInput {
  @Field()
  readonly name: string;

  @Field()
  readonly email: string;

  @Field()
  readonly cpf: string;
}
