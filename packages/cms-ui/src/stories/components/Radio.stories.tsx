import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';

import { Button } from '../../components/Button/index';
import { Radio } from '../../components/Radio/index';
import { RadioContextProps, RadioProps } from '../../components/Radio/Radio.types';

const meta: Meta = {
	title: 'components/Radio',
	component: Radio,
};

type Story = StoryObj<typeof Radio>;

type Direction = RadioContextProps['direction'];

type TemplateTypes = Omit<RadioProps, 'children'>;

const Template: StoryFn<TemplateTypes> = ({ ...args }) => {
	const [gapValue, setGapValue] = useState('8');
	const [buttonText, setButtonText] = useState<Direction>('row');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setGapValue(e.target.value);
	};

	const onClick = () => {
		setButtonText(buttonText === 'row' ? 'column' : 'row');
	};

	return (
		<>
			<Radio.Group onChange={onChange} value={gapValue} direction={buttonText} gap={Number(gapValue)}>
				<Radio {...args} value={'8'}>
					8px
				</Radio>
				<Radio {...args} value={'16'}>
					16px
				</Radio>
				<Radio {...args} value={'24'}>
					24px
				</Radio>
				<Radio {...args} value={'32'}>
					32px
				</Radio>
			</Radio.Group>
			<Button
				size="lg"
				customCSS={{
					margin: '80px auto 0',
				}}
				onClick={onClick}>
				{buttonText}
			</Button>
		</>
	);
};

export const Default: Story = {
	render: Template,
};

export default meta;
