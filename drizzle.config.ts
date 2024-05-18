import { defineConfig } from 'drizzle-kit';
export default defineConfig({
	dialect: 'postgresql',
	schema: './src/app/_schema.ts',
	out: './drizzle',
	dbCredentials: {
		url: process.env.DB_URL!,
	},
});
