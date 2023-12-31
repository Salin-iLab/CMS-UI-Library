import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { SearchIcon } from '../../../assets/SvgIcon/SearchIcon';
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
		colorTypes: 'blue',
		sizes: 'md',
		svgIcon: <SearchIcon width={16} height={16} />,
		svgPos: 'left',
		placeholder: 'placeholder',
	},
	argTypes: {
		svgIcon: {
			control: {
				type: null,
			},
		},
		svgPos: {
			control: 'radio',
			options: ['left', 'right'],
		},
		sizes: {
			control: 'radio',
			options: ['sm', 'md', 'lg'],
		},
		customCSS: {
			control: {
				type: null,
			},
		},
	},
};

export const NotIcon: Story = {
	args: {
		labelText: 'Email',
		isLabel: true,
		fullWidth: false,
		colorTypes: 'blue',
		sizes: 'md',
	},
	argTypes: {
		sizes: {
			control: 'radio',
			options: ['sm', 'md', 'lg'],
		},
		customCSS: {
			control: {
				type: null,
			},
		},
	},
};

export default meta;
