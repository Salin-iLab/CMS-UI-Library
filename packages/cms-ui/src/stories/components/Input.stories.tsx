import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/Input';

const meta: Meta = {
	title: 'components/Input',
	component: Input,
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		labelText: 'Email',
		isLabel: true,
		fullWidth: false,
	},
};

export default meta;
