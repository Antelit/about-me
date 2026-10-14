import type { Prisma, PrismaClient } from '../../generated/prisma/client.js';

export interface SeedFile {
    nameSeed: string;
    execute: (prisma: Prisma.TransactionClient) => Promise<void>;
}

export async function checkIfExists(prisma: Prisma.TransactionClient, nameSeed: string): Promise<boolean> {
    const existingSeed = await prisma.seed
        .findUnique({
            where: { nameSeed },
        });
    const isExists = existingSeed !== null;
    if (isExists) {
        console.log(`1. Seed already exists. Skipping execution.`);
        return false;
    }
    console.log(`1 .Seed does not exist. Proceeding with execution.`)
    return true;
}

export async function recordSeedExecution(prisma: PrismaClient, seed: SeedFile): Promise<void> {
    const { nameSeed } = seed;
    console.group(nameSeed);
    try {
        await prisma.$transaction(async (tx) => {
            const check = await checkIfExists(tx, nameSeed);
            if (!check) return;
            await seed.execute(tx);
            console.log(`2. Seed executed successfully.`);
            await tx.seed.create({ data: { nameSeed } });
            console.log(`3. Seed execution recorded successfully.`);
        });
    } catch (error) {
        console.error(`Error executing seed '${seed.nameSeed}':`, error);
        throw error;
    } finally {
        console.groupEnd();
    }
}
