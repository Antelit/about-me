import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { Experience } from '../../generated/prisma/client.js';

@Injectable()
export class ExperienceService {
    constructor(private readonly prisma: PrismaService) {}

    findAllByProfileID(profileId: number): Promise<Experience[]> {
        return this.prisma.experience.findMany({
            where: { profileId }
        });
    }
}
