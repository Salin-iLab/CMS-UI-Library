import { SerializedStyles } from '@emotion/react';
import { HTMLAttributes } from 'react';
import { Themes } from 'theme';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	colorTypes?: Themes;
	types?: 'outline' | 'solid' | 'text';
	size?: 'sm' | 'md' | 'lg';
	customCSS?: SerializedStyles;
}

export type ButtonStyledProps = Pick<ButtonProps, 'types' | 'size' | 'customCSS' | 'colorTypes'>;
