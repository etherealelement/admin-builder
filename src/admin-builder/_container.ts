import { createContainer } from 'tiny-invert';
import { AdminEntityConfig } from './_types';

export const AdminEntityBuilderContainer = createContainer<{
	config: AdminEntityConfig;
}>();
