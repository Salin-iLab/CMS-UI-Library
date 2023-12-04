import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import { RadioProps } from '../../components/Radio/Radio.types';
import { Radio } from '../../components/Radio/index';

const meta: Meta = {
	title: 'components/Radio',
	component: Radio,
};

type Story = StoryObj<typeof Radio>;

type TemplateTypes = Omit<RadioProps, 'children'>;

const Template: StoryFn<TemplateTypes> = ({ ...args }) => {
	const [value, setValue] = useState('A');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<Radio.Group onChange={onChange} value={value}>
			<Radio {...args} value={'A'}>
				A
			</Radio>
			<Radio {...args} value={'B'}>
				B
			</Radio>
			<Radio {...args} value={'C'}>
				C
			</Radio>
			<Radio {...args} value={'D'}>
				D
			</Radio>
		</Radio.Group>
	);
};

export const Default: Story = {
	render: Template,
};

export default meta;
