import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { Spacing } from '../../components/Spacing';

type Story = StoryObj<typeof Spacing>;

const Template: StoryFn<typeof Spacing> = args => {
	const flexDirection = args?.direction === 'horizontal' ? 'row' : 'column';

	return (
		<div style={{ display: 'flex', flexDirection, border: '1px solid red' }}>
			<div style={{ background: '#EEEEEE', border: '1px solid #DDDDDsD', padding: 20 }}>BOX 1</div>
			<Spacing {...args} />
			<div style={{ background: '#EEEEEE', border: '1px solid #DDDDDsD', padding: 20 }}>BOX 2</div>
		</div>
	);
};

const meta: Meta<typeof Spacing> = {
	title: 'components/Spacing',
	component: Spacing,
};

export default meta;

export const Defualt: Story = {
	render: Template,
	args: {
		direction: 'vertical',
		size: 30,
	},
};

// const Wrapper = ({ direction }: PropsWithChildren<WrapperProps>) => {
// 	const flexDirection = direction === 'horizontal' ? 'row' : 'column';
// 	return (
// 		<div style={{ display: 'flex', flexDirection, border: '1px solid red' }}>
// 			<div style={{ background: '#EEEEEE', border: '1px solid #DDDDDD', padding: 20 }}>박스1</div>
// 			{/* {children} */}
// 			<div style={{ background: '#EEEEEE', border: '1px solid #DDDDDsD', padding: 20 }}>박스2</div>
// 		</div>
// 	);
// };

// export const Horizontal: Story = {
// 	render: args => (
// 		<Wrapper direction={args.direction || 'vertical'}>
// 			<Spacing {...args} />
// 		</Wrapper>
// 	),
// };
