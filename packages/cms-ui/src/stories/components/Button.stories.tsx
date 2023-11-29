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

export const Default: Story = {
	args: {
		onClick: () => alert('clicked'),
		children: 'SmallButton',
		size: 'sm',
	},
};

export default meta;
