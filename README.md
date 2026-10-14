# About Me API

Backend-приложение цифровой визитки на NestJS с GraphQL API.

Позволяет получать информацию о профиле разработчика, опыте работы, навыках и проектах.

## Технологии

- Node.js / TypeScript
- NestJS
- GraphQL / Apollo Server
- Prisma ORM
- PostgreSQL 17
- Docker / Docker Compose

## Запуск

Для запуска необходимы Docker и Docker Compose.

**1. Создать `.env` в корне проекта:**

```env
POSTGRES_PASSWORD=your_password
```

**2. Запустить приложение:**

```bash
docker compose up -d --build
```

При запуске автоматически выполняются миграции Prisma и заполнение базы данных начальными данными.

**3. Открыть GraphQL API:**

http://localhost:3000/graphql

Если в Docker Compose настроен другой внешний порт, используйте его.

## Пример GraphQL-запроса

```graphql
query {
  profile {
    firstName
    lastName
    description
    experiences {
      title
      company
      startDate
      endDate
    }
    skills {
      name
    }
    projects {
      name
      description
      url
      repository
    }
  }
}
```

## Локальная разработка

Установить зависимости:

```bash
npm ci
```

Сгенерировать Prisma Client:

```bash
npm run db:generate
```

Запустить приложение в режиме разработки:

```bash
npm run start:dev
```

Для локального запуска требуется доступная база PostgreSQL и настроенная переменная `DATABASE_URL`.

## Структура проекта

- `src/` — модули, сервисы и GraphQL-резолверы.
- `prisma/model/` — модели базы данных.
- `prisma/migrations/` — миграции.
- `prisma/seeds/` — начальные данные.
- `Dockerfile` — сборка приложения.
- `docker-compose.yml` — запуск приложения и PostgreSQL.
