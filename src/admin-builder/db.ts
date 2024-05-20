import { createModule } from 'tiny-invert';
import { AdminDbEntityBuilderContainer } from './_container';
import { EntitySchemaProvider } from './_entity-schema';

const EntryProvider = AdminDbEntityBuilderContainer.provider(
	ctx => {
		ctx.innerDeps;
	},
	{
		schema: EntitySchemaProvider,
	}
);

export const EntityDbBuilder = createModule(EntryProvider);
