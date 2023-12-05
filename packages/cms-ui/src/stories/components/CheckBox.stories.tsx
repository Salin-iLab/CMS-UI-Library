import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { CSSProperties } from 'react';

import { CheckBox } from '../../components/CheckBox';
import { CheckBoxProps } from '../../components/CheckBox/CheckBox.types';

const meta: Meta = {
	title: 'components/CheckBox',
	component: CheckBox,
};

type Story = StoryObj<typeof CheckBox>;

type TemplateTypes = Omit<CheckBoxProps, 'children'>;

const style: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
};

const Template: StoryFn<TemplateTypes> = ({ ...args }) => {
	return (
		<div style={style}>
			<CheckBox {...args}>Check A</CheckBox>
			<CheckBox {...args}>Check B</CheckBox>
			<CheckBox {...args}>Check C</CheckBox>
		</div>
	);
};

export const Default: Story = {
	render: Template,
};

export default meta;
