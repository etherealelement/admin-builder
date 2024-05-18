import { drizzle } from 'drizzle-orm/postgres-js';
import { AdminEntityBuilderContainer } from './_container';
import { EntitySchemaProvider } from './_entity-schema';

export const DBProvider = AdminEntityBuilderContainer.provider(
	ctx => {
		const { deps, innerDeps } = ctx;

		const db = drizzle(deps.dbClient, {
			schema: {
				entitySchema: innerDeps.entitySchema,
			},
		});
		return db;
	},
	{
		entitySchema: EntitySchemaProvider,
	}
);
