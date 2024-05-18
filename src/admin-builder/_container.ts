import { createContainer } from 'tiny-invert';
import { AdminEntityConfig } from './_types';
import { Sql } from 'postgres';

export const AdminEntityBuilderContainer = createContainer<{
	config: AdminEntityConfig;
	dbClient: Sql;
}>();
