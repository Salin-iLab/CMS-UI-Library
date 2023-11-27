import React from 'react';
import { Button } from '../../components/Button';
import { StoryObj } from '@storybook/react';

export default {
	title: 'components/Button',
	component: Button,
};

type Story = StoryObj<typeof Button>;

export const SmallButton: Story = {
	args: {
		onClick: () => alert('clicked'),
		children: <span>SmallButton</span>,
		size: 'sm',
	},
};
export const MiddleButton: Story = {
	args: {
		onClick: () => alert('clicked'),
		children: <span>MiddleButton</span>,
		size: 'md',
	},
};
export const LargeButton: Story = {
	args: {
		onClick: () => alert('clicked'),
		children: <span>LargeButton</span>,
		size: 'lg',
	},
};
