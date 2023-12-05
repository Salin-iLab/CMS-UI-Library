import { CSSObject } from '@emotion/react';
import { InputHTMLAttributes } from 'react';

import { ColorThemes } from '../../theme/colors';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	colorTypes?: ColorThemes;
	sizes?: 'sm' | 'md' | 'lg';
	customCSS?: CSSObject;
}

export type CheckBoxStyledProps = Pick<CheckBoxProps, 'colorTypes' | 'sizes'>;

export type CheckBoxStyledWrapperProps = Pick<CheckBoxProps, 'sizes' | 'customCSS'>;
