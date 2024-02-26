# Prisma Getting Started

### Install the Prisma CLI

```
npm install prisma @prisma/client --save-dev
```

# Prisma Help

### Explore the data in Prisma Studio

```
npx prisma studio
```

### Set up a new Prisma project

```
npx prisma init
```

```
npx prisma init --datasource-provider sqlite
```

### Generate artifacts (e.g. Prisma Client)

```
npx prisma generate
```

### Browse your data

```
npx prisma studio
```

### Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)

```
npx prisma migrate dev
```

```
npx prisma migrate dev --name init
```

### Pull the schema from an existing database, updating the Prisma schema

```
npx prisma db pull
```

### Push the Prisma schema state to the database

```
npx prisma db push
```

### Seed your database

```
npx prisma db seed
```

### Validate your Prisma schema

```
npx prisma validate
```

### Format your Prisma schema

```
npx prisma format
```

### Display Prisma version info

```
npx prisma version
```

### Display Prisma debug info

```
npx prisma debug
```