import { AdminActionBuilderContainer } from './_container';

export const ActionProvider = AdminActionBuilderContainer.provider(ctx => {
	(ctx: any) => async () => {
		console.log('server comp', ctx.deps.config);
	};
}, {});
