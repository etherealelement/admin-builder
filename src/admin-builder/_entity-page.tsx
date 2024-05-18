import { AdminEntityBuilderContainer } from './_container';

export const EntityPageProvider = AdminEntityBuilderContainer.provider(ctx => {
	return function EntityPage() {
		return (
			<div>
				<h1>{ctx.deps.config.title}</h1>

				<div>
					{ctx.deps.config.fields.map(field => (
						<div key={field.name}>
							{field.type} : {field.name}
						</div>
					))}
				</div>
			</div>
		);
	};
});
