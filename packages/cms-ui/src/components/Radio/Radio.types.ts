import { ChangeEvent, ForwardRefExoticComponent, InputHTMLAttributes } from 'react';
import { ColorThemes } from '../../theme/colors';
import { RadioGroup } from './';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	colorTypes?: ColorThemes;
	sizes?: 'sm' | 'md' | 'lg';
}

export interface RadioContextProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	defaultValue?: any;
	value: any;
	name: string;
}

export type RadioStyledWrapperProps = Pick<RadioProps, 'colorTypes'>;

export type RadioStyledIconProps = Pick<RadioProps, 'checked' | 'colorTypes'>;

export type RadioStyledBoxProps = Pick<RadioProps, 'colorTypes'>;

export type CompoundedComponent = ForwardRefExoticComponent<RadioProps> & { Group: typeof RadioGroup };
