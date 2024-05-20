import { AdminClientEntityBuilderContainer } from './_container';
import { EntitySchemaProvider } from './_entity-schema';
import { createModule } from 'tiny-invert';

const EntryProvider = AdminClientEntityBuilderContainer.provider(ctx => {
	{
	}
});

export const EntityClientBuilder = createModule(EntryProvider);
