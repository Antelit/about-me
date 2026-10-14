import 'dotenv/config';
import fs from 'fs';

import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

import { recordSeedExecution } from './seedRun.js';

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}
const adapter = new PrismaPg({ connectionString: DATABASE_URL });
const prisma = new PrismaClient({ adapter });

console.log('Starting seed execution...');
console.log('Filtering seeds file from the prisma/seeds directory...');
const seedFiles = fs.readdirSync('./prisma/seeds')
    .filter((file) => {
        if (!file.endsWith('.ts')) return false;
        const [number] = file.split('-');
        return Number.isInteger(parseInt(number))
    }).map((file) => {
        const [number] = file.split('-');
        return { index: parseInt(number), file };
    })
    .sort((a, b) => a.index - b.index);

if (seedFiles.length === 0) {
    console.log('No seed files found. Exiting.');
}

console.log(`Found ${seedFiles.length} seed files.`);
console.log('**************************************');

try {
    for (const seedFile of seedFiles) {
        const { default: seed } = await import(`./${seedFile.file}`);
        await recordSeedExecution(prisma, seed);
    }
    console.log('**************************************');
} catch (error) {
    console.error('Error during seed execution:', error);
} finally {
    await prisma.$disconnect();
    console.log('Prisma connection closed. Seed execution completed.');
}


