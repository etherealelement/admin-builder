import { EntityDbBuilder } from '@/admin-builder/entity-db-builder';
import { entityConfig } from './config';
import { dbClient } from '@/shared/db-client';

export const userDb = EntityDbBuilder.init({
	config: entityConfig,
	dbClient,
});
