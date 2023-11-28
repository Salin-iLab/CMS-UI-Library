import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PropsWithChildren } from 'react';
import { Spacing } from '../../components/Spacing';

const meta: Meta = {
	title: 'components/Spacing',
	component: Spacing,
};

interface WrapperProps {
	direction: 'horizontal' | 'vertical';
}

const Wrapper = ({ children, direction }: PropsWithChildren<WrapperProps>) => {
	const flexDirection = direction === 'horizontal' ? 'row' : 'column';
	return (
		<div style={{ display: 'flex', flexDirection, border: '1px solid red' }}>
			<div style={{ background: '#EEEEEE', border: '1px solid #DDDDDD', padding: 20 }}>박스1</div>
			{children}
			<div style={{ background: '#EEEEEE', border: '1px solid #DDDDDsD', padding: 20 }}>박스2</div>
		</div>
	);
};

type Story = StoryObj<typeof Spacing>;

export const Horizontal: Story = {
	render: args => (
		<Wrapper direction={args.direction || 'vertical'}>
			<Spacing {...args} />
		</Wrapper>
	),
};

export default meta;
