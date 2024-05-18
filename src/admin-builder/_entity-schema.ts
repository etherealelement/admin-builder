import { AdminEntityBuilderContainer } from './_container';
import { serial, text, timestamp, pgTable } from 'drizzle-orm/pg-core';

export const EntitySchemaProvider = AdminEntityBuilderContainer.provider(
	ctx => {
		const { deps, innerDeps } = ctx;

		const fields = Object.fromEntries(
			deps.config.fields.map(field => {
				return [field.name, text(field.name)];
			})
		);

		const entitySchema = pgTable(deps.config.name, {
			id: serial('id'),
			...fields,
			createdAt: timestamp('created_at'),
			updatedAt: timestamp('updated_at'),
		});

		return entitySchema;
	}
);
