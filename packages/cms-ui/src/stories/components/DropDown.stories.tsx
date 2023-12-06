import { Meta, StoryObj } from '@storybook/react';
import { DropDown } from '../../Components/DropDown';

const meta: Meta = {
	title: 'components/Dropdown',
	component: DropDown,
};

type Story = StoryObj<typeof DropDown>;

const options = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
	args: {
		list: options,
		colorTypes: 'blue',
		size: 'md',
		mainLabel: 'Select Option',
		isIcon: true,
	},
	argTypes: {
		size: {
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
