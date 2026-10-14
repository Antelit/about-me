import type { SeedFile } from './seedRun.js'


const profileSeed: SeedFile = {
    nameSeed: '0004-skill-seed',
    execute: async (prisma) => {
        const ProfileRow = await prisma.profile.findFirst({
            where: {
                lastName: 'Яковлев', firstName: 'Никита',
            }
        });

        if (!ProfileRow) {
            throw new Error('Profile not found');
        }

        const { profileId } = ProfileRow;

        const data = [
            'JavaScript',
            'TypeScript',
            'SQL',
            'HTML',
            'CSS',

            'Node.js',
            'Express',
            'GraphQL',
            'REST API',
            'Socket.IO',
            'WebSocket',
            'RabbitMQ',

            'Vue.js',

            'PostgreSQL',
            'MySQL',
            'Microsoft SQL Server',
            'Redis',

            'Database Design',
            'API Integration',
            'Business Process Automation',
            'CRM Development',
            'Object-Oriented Programming',
        ].map(name => ({ name, profileId }));

        await prisma.skill.createMany({ data })
    }
}

export default profileSeed;