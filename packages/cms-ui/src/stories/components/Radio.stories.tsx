import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { ChangeEvent, useContext, useState } from 'react';
import { RadioContext } from '../../components/Radio/Radio.context';
import { Radio } from '../../components/Radio/index';

const meta: Meta = {
	title: 'components/Radio',
	component: Radio,
};

type Story = StoryObj<typeof Radio>;

const Template: StoryFn<typeof Radio> = args => {
	const [value, setValue] = useState('A');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<Radio.Group onChange={onChange} value={value} name={'test'}>
			<Radio {...args} value={'A'} />
			<Radio {...args} value={'B'} />
		</Radio.Group>
	);
};

export const Default: Story = {
	render: Template,
	args: {
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
