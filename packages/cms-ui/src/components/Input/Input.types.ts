import { InputHTMLAttributes } from 'react';
import { ColorThemes } from '../../theme/colors';
import { CSSObject } from '@emotion/react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isLabel?: boolean;
	labelText: string;
	fullWidth?: boolean;
	colorTypes?: ColorThemes;
	customCSS?: CSSObject;
}

export type InputStyledProps = Pick<InputProps, 'colorTypes' | 'customCSS'>;

export type InputStyledLabelProps = Pick<InputProps, 'fullWidth'>;
