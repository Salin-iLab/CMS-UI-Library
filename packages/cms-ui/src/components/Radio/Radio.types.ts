import { ChangeEvent, InputHTMLAttributes } from 'react';
import { ColorThemes } from '../../theme/colors';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	colorTypes?: ColorThemes;
	sizes?: 'sm' | 'md' | 'lg';
}

export interface RadioContextProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: any;
}

export type RadioStyledWrapperProps = Pick<RadioProps, 'colorTypes'>;

export type RadioStyledIconProps = Pick<RadioProps, 'checked' | 'colorTypes'>;

export type RadioStyledBoxProps = Pick<RadioProps, 'colorTypes'>;
