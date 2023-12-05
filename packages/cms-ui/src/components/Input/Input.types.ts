import { CSSObject } from '@emotion/react';
import { InputHTMLAttributes } from 'react';

import { ColorThemes } from '../../theme/colors';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isLabel?: boolean;
	labelText: string;
	fullWidth?: boolean;
	colorTypes?: ColorThemes;
	sizes?: 'sm' | 'md' | 'lg';
	svgIcon?: JSX.Element;
	svgPos?: 'left' | 'right';
	customCSS?: CSSObject;
}

export type InputStyledProps = Pick<InputProps, 'colorTypes' | 'customCSS' | 'sizes' | 'svgPos' | 'svgIcon'>;

export type InputStyledLabelProps = Pick<InputProps, 'fullWidth' | 'sizes' | 'colorTypes'>;

export type InputStyledLabelTextProps = Pick<InputProps, 'sizes'>;

export type InputStyledIconProps = Pick<InputProps, 'svgPos'>;
