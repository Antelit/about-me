import type { SeedFile } from './seedRun.js'


const profileSeed: SeedFile = {
    nameSeed: '0003-project-seed',
    execute: async (prisma) => {
        const ProfileRow = await prisma.profile.findFirst({
            where: {
                lastName: 'Яковлев', firstName: 'Никита',
            }
        });

        if (!ProfileRow) {
            throw new Error('Profile not found');
        }
        await prisma.project.createMany({
            data: [
                {
                    profileId: ProfileRow.profileId,
                    name: 'Омниканальная система',
                    description: 'Полная разработка омниканальной системы для работы "в одном окне" с популярными мессенджерами: '
                        + 'Telegram, Vibe, WhatsApp (через двух посредников), VK, MAX своё мобильное приложение. \n'
                        + 'Разработана для общения с застрахованными по всему миру и информированию о порядке оказания помощи.\n'
                        + 'Реализованно получения всех возможных видов сообщений из мессенджеров'
                },
                {
                    profileId: ProfileRow.profileId,
                    name: 'Корпоративная CRM',
                    description: 'Перенос CRM из самописного конструктора ProjectDB (аналог Ms Access) в Web-интерфейс. \n'
                        + 'Перенос основных модулей системы на Web-технологии для Real-Time работы'
                },
                {
                    profileId: ProfileRow.profileId,
                    name: 'Табло звонков',
                    description: 'Разработано табло входящих/исходящих звонков, а так же мониторинг активности call-center'
                },
                {
                    profileId: ProfileRow.profileId,
                    name: 'Soft-Phone',
                    description: 'Контроли и доработки корпоративного Soft-Phone. Интеграция нового функционала.'
                },
                {
                    profileId: ProfileRow.profileId,
                    name: 'Автоматизация складского учета',
                    description: 'Создание системы контроля остатков деталей для сборки автомобилей'
                },
                {
                    profileId: ProfileRow.profileId,
                    name: 'Разработка CRM для ведения контейнерных перевозок',
                    description: 'Создание клиентской, админской части контроля морских перевозок, а также интрументов для формирования документов (Коносаментов и морских манифестов)'
                }
            ]
        })
    }
}

export default profileSeed;