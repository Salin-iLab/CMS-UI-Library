import { Button } from '../../components/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
	title: 'components/Button',
	component: Button,
	argTypes: {
		customCSS: {
			control: {
				type: null,
			},
		},
	},
};

type Story = StoryObj<typeof Button>;

export const SmallButton: Story = {
	args: {
		onClick: () => alert('clicked'),
		children: 'SmallButton',
		size: 'sm',
	},
};
export const MiddleButton: Story = {
	args: {
		onClick: () => alert('clicked'),
		children: 'MiddleButton',
		size: 'md',
	},
};
export const LargeButton: Story = {
	args: {
		onClick: () => alert('clicked'),
		children: 'LargeButton',
		size: 'lg',
	},
};

export default meta;
