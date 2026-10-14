import { Module } from '@nestjs/common';
import { ProjectResolver } from './project.resolver.js';
import { ProjectService } from './project.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  providers: [ProjectResolver, ProjectService]
})

export class ProjectModule {}
