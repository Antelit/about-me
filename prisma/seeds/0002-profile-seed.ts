import type { SeedFile } from './seedRun.js'


const profileSeed: SeedFile = {
    nameSeed: '0002-profile-seed',
    execute: async (prisma) => {
        const ProfileRow = await prisma.profile.findFirst({
            where: {
                firstName: 'Яковлев', lastName: 'Никита',
            }
        });

        if (!ProfileRow) {
            throw new Error('Profile not found');
        }
        await prisma.profile.update({
            where: {
                profileId: ProfileRow.profileId,
            },
            data: {
                lastName: 'Яковлев', firstName: 'Никита',
                linkedin: 'https://www.linkedin.com/in/nikita-iakovlev-790372443/',
            }
        });
    }
}

export default profileSeed;