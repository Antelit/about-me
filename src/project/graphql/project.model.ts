import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Project {
    @Field(() => Int)
    projectId: number;

    @Field()
    name: string
    
    @Field()
    description: string
    
    @Field(() => String, { nullable: true })
    url: string | null

    @Field(() => String, { nullable: true })
    repository: string | null

    @Field(() => Int)
    profileId: number;
}
