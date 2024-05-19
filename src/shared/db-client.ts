import postgres from 'postgres';

export const dbClient = postgres(process.env.DB_URL!);
