import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Project } from './graphql/project.model.js';
import { ProjectService } from './project.service.js';

@Resolver(() => Project)
export class ProjectResolver {
    constructor(private readonly projectService: ProjectService) {}

    
    @Query(() => [Project])
    project(@Args('profileId', { type: () => Int }) profileId: number): Promise<Project[]> {
        return this.projectService.findAllByProfileID(profileId);
    }
}
