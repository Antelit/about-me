import type { SeedFile } from './seedRun.js'


const profileSeed: SeedFile = {
    nameSeed: '0001-profile-seed',
    execute: async (prisma) => {
        await prisma.profile.create({
            data: {
                firstName: 'Яковлев',
                lastName: 'Никита',
                description: 'Разработчик программного обеспечения с опытом работы в различных областях',
                github: null,
                linkedin: null,
            }
        });
    }
}

export default profileSeed;