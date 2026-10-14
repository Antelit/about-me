import { Module } from '@nestjs/common';
import { ExperienceResolver } from './experience.resolver.js';
import { ExperienceService } from './experience.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  providers: [ExperienceResolver, ExperienceService]
})

export class ExperienceModule {}
