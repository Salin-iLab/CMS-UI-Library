import { CSSObject } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';
import { ColorThemes } from '../../theme/colors';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	colorTypes?: ColorThemes;
	types?: 'outline' | 'solid' | 'text';
	size?: 'sm' | 'md' | 'lg';
	isRounded?: boolean;
	fullWidth?: boolean;
	customCSS?: CSSObject;
}

export type ButtonStyledProps = Pick<
	ButtonProps,
	'types' | 'size' | 'colorTypes' | 'isRounded' | 'fullWidth' | 'customCSS'
>;
