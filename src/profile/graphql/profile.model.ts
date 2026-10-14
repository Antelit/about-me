import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Experience } from '../../experience/graphql/experience.model.js';
import { Skill } from '../../skill/graphql/skill.model.js';
import { Project } from '../../project/graphql/project.model.js';

@ObjectType()
export class Profile {
    @Field(() => Int)
    profileId: number;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(() => String, { nullable: true })
    middleName: string | null;

    @Field()
    description: string;

    @Field(() => String, { nullable: true })
    github: string | null;

    @Field(() => String, { nullable: true })
    linkedin: string | null;

    @Field(() => [Experience])
    experiences?: Experience[];

    @Field(() => [Skill])
    skills?: Skill[];

    @Field(() => [Project])
    projects?: Project[];
}