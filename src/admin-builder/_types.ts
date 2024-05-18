type TextField = {
    type: "text";
    name: string;
    title: string;
    inputType: string;
}

type Options = {
    label: string;
    value: string;
}

type SelectField = {
    type: "select";
    name: string;
    title: string;
    options: Options[];
}

export type AdminBuilderField = TextField | SelectField;

export type AdminBuilderConfig = {
    name: string;
    title: string;
    fields: AdminBuilderField;
}