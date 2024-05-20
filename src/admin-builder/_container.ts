import { createContainer, mergeContainers } from 'tiny-invert';
import { AdminEntityConfig } from './_types';
import { Sql } from 'postgres';

export const DbClientContainer = createContainer<{
	dbClient: Sql;
}>();

export const ConfigContainer = createContainer<{
	config: AdminEntityConfig;
}>();

export const AdminDbEntityBuilderContainer = mergeContainers([
	DbClientContainer,
	ConfigContainer,
]);

export const AdminServerEntityBuilderContainer = mergeContainers([
	DbClientContainer,
	ConfigContainer,
]).extend<{
	userAction: unknown;
}>('AdminServerEntityBuilderContainer');

export const AdminActionBuilderContainer = mergeContainers([
	DbClientContainer,
	ConfigContainer,
]);

export const AdminClientEntityBuilderContainer = mergeContainers([
	ConfigContainer,
]);
