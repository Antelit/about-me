import { Field, Int, ObjectType, GraphQLISODateTime } from "@nestjs/graphql";

@ObjectType()
export class Experience {
    @Field(() => Int)
    experienceId: number;

    @Field()
    title: string

    @Field()
    company: string

    @Field(() => GraphQLISODateTime)
    startDate: Date

    @Field(() => GraphQLISODateTime, { nullable: true })
    endDate: Date | null

    @Field()
    description: string

    @Field(() => [String])
    achievements: string[];

    @Field(() => Int)
    profileId: number;
}