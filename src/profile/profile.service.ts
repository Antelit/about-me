import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { Profile } from '../../generated/prisma/client.js';
import type { Prisma } from '../../generated/prisma/client.js'

@Injectable()
export class ProfileService {
    constructor(private readonly prisma: PrismaService) {}

    findOne(include: Prisma.ProfileInclude): Promise<Profile | null> {
        return this.prisma.profile.findFirst({ include });
    }
}
