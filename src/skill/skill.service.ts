import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { Skill } from '../../generated/prisma/client.js';

@Injectable()
export class SkillService {
    constructor(private readonly prisma: PrismaService) {}

    findAllByProfileID(profileId: number): Promise<Skill[]> {
        return this.prisma.skill.findMany({
            where: { profileId }
        });
    }
}
