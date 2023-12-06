import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Select } from '../../components/Select';
import { SelectProps } from '../../components/Select/Select.types';

const meta: Meta = {
	title: 'components/Select',
	component: Select,
	argTypes: {
		customCSS: {
			control: {
				type: null,
			},
		},
	},
};

type Story = StoryObj<typeof Select>;

type TemplateTypes = Omit<SelectProps, 'options' | 'value'>;

const DUMMY = [
	{ value: 1, label: '하나' },
	{ value: 2, label: '둘' },
	{ value: 3, label: '셋' },
	{ value: 4, label: '넷' },
];

const Template: StoryFn<TemplateTypes> = ({ ...args }) => {
	const [value, setValue] = useState(1);

	return <Select options={DUMMY} value={value} {...args} />;
};

export const Default: Story = {
	render: Template,
};

export default meta;
