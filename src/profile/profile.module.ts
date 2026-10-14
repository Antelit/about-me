import { Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver.js';
import { ProfileService } from './profile.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

import { ExperienceService } from '../experience/experience.service.js';
import { SkillService } from '../skill/skill.service.js';
import { ProjectService } from '../project/project.service.js';

@Module({
  imports: [PrismaModule],
  providers: [ProfileService, ProfileResolver, ExperienceService, SkillService, ProjectService]
})
export class ProfileModule {}
