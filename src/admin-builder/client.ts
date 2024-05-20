import { useEffect } from 'react';
import { AdminClientEntityBuilderContainer } from './_container';
import { EntitySchemaProvider } from './_entity-schema';
import { createModule } from 'tiny-invert';

const EntryProvider = AdminClientEntityBuilderContainer.provider(ctx => {
	return {
		CreateEntityForm() {
			useEffect(() => {
				console.log('log', ctx.deps.config);
			}, []);
			return null;
		},
	};
});

export const EntityClientBuilder = createModule(EntryProvider);
