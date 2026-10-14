import { Info, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import type { GraphQLResolveInfo } from 'graphql';

import type { Prisma } from '../../generated/prisma/client.js'

import { Profile } from './graphql/profile.model.js';
import { ProfileService } from './profile.service.js';

import { Experience } from '../experience/graphql/experience.model.js';
import { ExperienceService } from '../experience/experience.service.js';

import { Skill } from '../skill/graphql/skill.model.js';
import { SkillService } from '../skill/skill.service.js';

import { Project } from '../project/graphql/project.model.js';
import { ProjectService } from '../project/project.service.js';

@Resolver(() => Profile)
export class ProfileResolver {
    constructor(
        private readonly profileService: ProfileService,
        // private readonly experienceService: ExperienceService,
        // private readonly skillService: SkillService,
        // private readonly projectService: ProjectService,
    ) {}

    @Query(() => Profile, { nullable: true })  
    profile(@Info() info: GraphQLResolveInfo): Promise<Profile | null> {
        const reqField: Array<string> = [];

        const collectFields = (selectionSet: typeof info.fieldNodes[number]['selectionSet']): void => {
            (selectionSet || {})?.selections?.forEach((el) => {
                if (el.kind === 'Field') reqField.push(el.name.value);
            });
        }

        for (const fieldNode of info.fieldNodes) {
            collectFields(fieldNode.selectionSet);
        }

        const include: Prisma.ProfileInclude = {
            experiences: reqField.some(el => el === 'experiences'),
            skills: reqField.some(el => el === 'skills'),
            projects: reqField.some(el => el === 'projects'),
        };

        return this.profileService.findOne(include);
    }

    // @ResolveField(() => [Experience])
    // experiences(@Parent() profile: Profile): Promise<Experience[]> {
    //     return this.experienceService.findAllByProfileID(profile.profileId);
    // }

    @ResolveField(() => [Experience])
    experiences(@Parent() profile: Profile): Experience[] {
        return profile?.experiences || [];
    }

    // @ResolveField(() => [Skill])
    // skills(@Parent() profile: Profile): Promise<Skill[]> {
    //     return this.skillService.findAllByProfileID(profile.profileId);
    // }

    @ResolveField(() => [Skill])
    skills(@Parent() profile: Profile): Skill[] {
        return profile?.skills || []
    }

    // @ResolveField(() => [Project])
    // projects(@Parent() profile: Profile): Promise<Project[]> {
    //     return this.projectService.findAllByProfileID(profile.profileId);
    // }

    @ResolveField(() => [Project])
    projects(@Parent() profile: Profile): Project[] {
        return profile?.projects || [];
    }
}
