import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const { DATABASE_URL } = process.env;

    if (!DATABASE_URL) {
        throw new Error('DATABASE_URL is not defined');
    }
    const adapter = new PrismaPg({ connectionString: DATABASE_URL });
    super({ adapter, log: ['query', 'error', 'warn'] });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
