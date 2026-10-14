import { Module } from '@nestjs/common';
import { SkillResolver } from './skill.resolver.js';
import { SkillService } from './skill.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  providers: [SkillResolver, SkillService]
})

export class SkillModule {}
