import { createModule } from 'tiny-invert';
import { AdminClientEntityBuilderContainer } from './_container';
import { EntityPageProvider } from './_entity-page';

export type { AdminEntityConfig, AdminBuilderField } from './_types';

const EntryProvider = AdminClientEntityBuilderContainer.provider(
	ctx => ({
		EntityPage: ctx.innerDeps.EntityPage,
	}),
	{ EntityPage: EntityPageProvider }
);

export const EntityServerBuilder = createModule(EntryProvider);
