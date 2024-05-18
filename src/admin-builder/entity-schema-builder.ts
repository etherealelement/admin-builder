import { createModule } from 'tiny-invert';
import { EntitySchemaProvider } from './_entity-schema';

export const EntitySchemaBuilder = createModule(EntitySchemaProvider);
