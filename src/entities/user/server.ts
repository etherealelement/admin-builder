import { EntityBuilder } from '@/admin-builder/entity-builder';
import { entityConfig } from './config';
import { dbClient } from '@/shared/db-client';
import { userAction } from './action';
import { userClient } from './client';

export const UserEntity = EntityBuilder.init({
	config: entityConfig,
	dbClient,
	action: userAction,
	client: userClient,
});
