import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Radio } from '../../components/Radio/index';
import React from 'react';

const meta: Meta = {
	title: 'components/Radio',
	component: Radio,
};

type Story = StoryObj<typeof Radio>;

const Template: StoryFn<typeof Radio> = args => {
	return <Radio defaultChecked {...args} />;
};

export const Default: Story = {
	render: Template,
	args: {
		value: 'Radio',
		checked: true,
	},
	argTypes: {
		value: {
			control: {
				type: 'text',
			},
		},
	},
};

export default meta;
