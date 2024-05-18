import {
	AdminEntityConfig,
	EntityBuilder,
} from '@/admin-builder/entity-builder';

const entityConfig: AdminEntityConfig = {
	name: 'user',
	title: 'Users',
	fields: [
		{
			type: 'text',
			name: 'name',
			title: 'Name',
		},
		{
			type: 'select',
			name: 'role',
			title: 'Role',
			options: [
				{
					label: 'Admin',
					value: 'admin',
				},
				{
					label: 'User',
					value: 'user',
				},
			],
		},
	],
};

export const UserEntity = EntityBuilder.init({
	config: entityConfig,
});
