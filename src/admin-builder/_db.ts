import { drizzle } from 'drizzle-orm/postgres-js';
import { ConfigContainer, DbClientContainer } from './_container';
import { EntitySchemaProvider } from './_entity-schema';
import { mergeContainers } from 'tiny-invert';

export const DBProvider = mergeContainers([
	DbClientContainer,
	ConfigContainer,
]).provider(
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
