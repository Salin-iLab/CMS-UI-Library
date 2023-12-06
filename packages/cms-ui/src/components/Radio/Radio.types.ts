import { ChangeEvent, ForwardRefExoticComponent, InputHTMLAttributes } from 'react';

import { ColorThemes } from '../../theme/colors';
import { RadioGroup } from './';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	colorTypes?: ColorThemes;
	children: string;
}

export interface RadioContextProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	direction?: 'row' | 'column';
	gap?: number;
	defaultValue?: any;
	value: any;
}

export type RadioStyledWrapperProps = Pick<RadioProps, 'colorTypes'>;

export type RadioStyledIconProps = Pick<RadioProps, 'checked' | 'colorTypes'>;

export type RadioStyledBoxProps = Pick<RadioProps, 'colorTypes'>;

export type RadioStyledGroupProps = Pick<RadioContextProps, 'direction' | 'gap'>;

export type CompoundedComponent = ForwardRefExoticComponent<RadioProps> & { Group: typeof RadioGroup };
