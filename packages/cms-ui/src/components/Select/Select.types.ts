import { CSSObject } from '@emotion/react';
import { HTMLAttributes } from 'react';

import { ColorThemes } from '../../theme/colors';

export interface Option {
	value: string | number;
	label: string | number | undefined;
}

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
	options: Option[];
	value: string | number;
	defaultValue?: string | number;
	colorTypes?: ColorThemes;
	customCSS?: CSSObject;
	onClick?: () => void;
}

export type SelectStyledProps = Pick<SelectProps, 'colorTypes' | 'value'>;

export type SelectStyledOptionWrapperProps = Pick<SelectProps, 'colorTypes'> & { isOpen: boolean };
