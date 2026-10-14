import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Skill {
    @Field(() => Int)
    skillId: number;

    @Field()
    name: string

    @Field(() => Int)
    profileId: number;
}
