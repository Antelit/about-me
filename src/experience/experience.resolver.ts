import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Experience } from './graphql/experience.model.js';
import { ExperienceService } from './experience.service.js';

@Resolver(() => Experience)
export class ExperienceResolver {
    constructor(private readonly experienceService: ExperienceService) {}

    
    @Query(() => [Experience])
    experience(@Args('profileId', { type: () => Int }) profileId: number): Promise<Experience[]> {
        return this.experienceService.findAllByProfileID(profileId);
    }
}
