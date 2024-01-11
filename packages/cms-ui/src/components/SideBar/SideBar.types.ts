import { CSSObject } from '@emotion/react';
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
	customCSS?: CSSObject;
	logoJsx: JSX.Element;
}

export interface SideBarMenuitemProps extends HTMLAttributes<HTMLLIElement> {
	menu: SideBarMenuitemTypes;
	colorTypes?: ColorThemes;
	isSelect?: boolean;
	isPath?: boolean;
	isOpen?: boolean;
}

export type SideBarWrapperStyledProps = Pick<SideBarProps, 'customCSS'>;

export type SideBarLogoJsxStyledProps = Pick<SideBarProps, 'logoJsx'>;

export type SideBarSubListStyledProps = Pick<SideBarMenuitemProps, 'isOpen'>;

export type SideBarMenuItemStyledProps = Pick<SideBarMenuitemProps, 'colorTypes' | 'isOpen' | 'isSelect' | 'isPath'>;

export type SideBarIconStyledProps = Pick<SideBarMenuitemProps, 'colorTypes' | 'isOpen' | 'isSelect' | 'isPath'>;
