import { AdminEntityBuilderContainer } from './_container';
import { EntityPageProvider } from './_entity-page';
import { createModule } from 'tiny-invert';

export type { AdminBuilderField, AdminEntityConfig } from './_types';

const EntryProvider = AdminEntityBuilderContainer.provider(
	ctx => ({
		EntityPage: ctx.innerDeps.EntityPage,
	}),
	{ EntityPage: EntityPageProvider }
);

export const EntityBuilder = createModule(EntryProvider);
