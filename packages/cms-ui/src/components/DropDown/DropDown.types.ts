import { ReactNode, HTMLAttributes } from 'react';
import { ColorThemes } from '../../theme/colors';
import { CSSObject } from '@emotion/react';

export interface DropDownItem {
	value: string;
	label: string;
}
export interface DropDownProps extends HTMLAttributes<HTMLDivElement> {
	colorTypes?: ColorThemes;
	list: DropDownItem[];
	isIcon?: boolean;
	size?: 'sm' | 'md' | 'lg';
	customCSS?: CSSObject;
	mainLabel?: string;
}

export type DropDownStyledProps = Pick<DropDownProps, 'size' | 'colorTypes' | 'customCSS'>;

export type DropDownIconStyledProps = {
	isOpen: boolean;
};
