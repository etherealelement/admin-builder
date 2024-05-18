type Options = {
	label: string;
	value: string;
};

type TextField = {
	type: 'text';
	name: string;
	title: string;
};

type SelectField = {
	type: 'select';
	name: string;
	title: string;
	options?: Options[];
};

export type AdminBuilderField = TextField | SelectField;

export type AdminEntityConfig = {
	name: string;
	title: string;
	fields: AdminBuilderField[];
};
