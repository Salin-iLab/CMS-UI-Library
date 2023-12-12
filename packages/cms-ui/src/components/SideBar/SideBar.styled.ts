import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { SideBarIconStyledProps, SideBarMenuItemStyledProps } from '../SideBar/SideBar.types';
import { colors } from './../../theme/colors';

export const StyledSideBarWrapper = styled.div`
	width: 100%;
	max-width: 256px;
	padding: 20px;
`;

export const StyledSideBarList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const StyledSideBarMenuItemWrapper = styled.li<SideBarMenuItemStyledProps>`
	display: flex;
	align-items: center;
	height: 40px;
	margin: 8px 0;
	padding: 0 16px;
	box-sizing: border-box;
	border-radius: 8px;
	transition: all 0.3s;
	gap: 8px;

	&:hover {
		background-color: ${colors.gray[200]};
	}

	${props => {
		if (!props.colorTypes) return null;

		return css`
			color: ${props.isOpen ? colors[props.colorTypes][500] : 'black'};

			& span {
				color: ${props.isOpen ? colors[props.colorTypes][500] : 'black'};
			}
		`;
	}}
`;

export const StyledSideBarIcon = styled.span<SideBarIconStyledProps>`
	> svg {
		${props => {
			if (!props.colorTypes) return null;

			return css`
				fill: ${props.isOpen ? colors[props.colorTypes][500] : 'black'};
			`;
		}}
	}
`;

export const StyledSideBarTitle = styled.span``;

export const StyledArrow = styled.i``;
