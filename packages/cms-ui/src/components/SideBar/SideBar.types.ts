import { HTMLAttributes } from 'react';

import { ColorThemes } from '../../theme/colors';

export interface SideBarMenuitemTypes {
	name: string;
	path?: string;
	icon?: JSX.Element;
	children?: SideBarMenuitemTypes[];
}

export interface SideBarProps extends HTMLAttributes<HTMLUListElement> {
	menuList: SideBarMenuitemTypes[];
	colorTypes?: ColorThemes;
}

export interface SideBarMenuitemProps extends HTMLAttributes<HTMLLIElement> {
	menu: SideBarMenuitemTypes;
	colorTypes?: ColorThemes;
	isOpen?: boolean;
}

export type SideBarMenuItemStyledProps = Pick<SideBarMenuitemProps, 'colorTypes' | 'isOpen'>;

export type SideBarIconStyledProps = Pick<SideBarMenuitemProps, 'colorTypes' | 'isOpen'>;
