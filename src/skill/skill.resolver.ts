import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Skill } from './graphql/skill.model.js';
import { SkillService } from './skill.service.js';

@Resolver(() => Skill)
export class SkillResolver {
    constructor(private readonly skillService: SkillService) {}

    
    @Query(() => [Skill])
    skill(@Args('profileId', { type: () => Int }) profileId: number): Promise<Skill[]> {
        return this.skillService.findAllByProfileID(profileId);
    }
}
