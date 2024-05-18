import { EntityBuilder } from '@/admin-builder/entity-builder';
import { entityConfig } from './config';

export const UserEntity = EntityBuilder.init({
	config: entityConfig,
});
