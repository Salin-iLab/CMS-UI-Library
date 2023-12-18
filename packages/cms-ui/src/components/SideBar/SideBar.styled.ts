import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import {
	SideBarIconStyledProps,
	SideBarMenuItemStyledProps,
	SideBarSubListSTyledProps,
} from '../SideBar/SideBar.types';
import { colors } from './../../theme/colors';

const SideBarSubListOpenAnimation = keyframes`
	from {
		opacity: 0;
		height: 0;
		margin: 0;		
	}

	to {
		opacity: 1;
		height: 40px;
		margin: 8px 0;
	}
`;

const SideBarSubListCloseAnimation = keyframes`
	from {
		opacity: 1;
		height: 40px;
		margin: 8px 0;
		
	}

	to {
		opacity: 0;
		height: 0;
		margin: 0;
	}
`;

export const StyledSideBarWrapper = styled.div`
	width: 100%;
	max-width: 256px;
	padding: 20px;
`;

export const StyledSideBarList = styled.ul<SideBarSubListSTyledProps>`
	list-style: none;
	padding: 0;
	margin: 0;

	&.sub-list {
		& > li {
			animation: ${props =>
				props.isOpen
					? css`
							${SideBarSubListOpenAnimation} 0.2s ease-in-out forwards;
					  `
					: css`
							${SideBarSubListCloseAnimation} 0.2s ease-out forwards;
					  `};
		}
	}
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

	&.sub-item {
		padding: 0 16px 0 30px;
	}

	&:hover {
		background-color: ${colors.gray[200]};
	}

	${props => {
		if (!props.colorTypes) return null;

		return css`
			color: ${props.isSelect || props.isPath ? colors[props.colorTypes][500] : 'black'};
			background-color: ${props.isSelect ? colors[props.colorTypes][100] : 'transparent'};

			& span {
				color: ${props.isSelect || props.isPath ? colors[props.colorTypes][500] : 'black'};
			}
		`;
	}}
`;

export const StyledSideBarIcon = styled.span<SideBarIconStyledProps>`
	> svg {
		${props => {
			if (!props.colorTypes) return null;

			return css`
				fill: ${props.isSelect || props.isPath ? colors[props.colorTypes][500] : 'black'};
			`;
		}}
	}
`;

export const StyledSideBarTitle = styled.span``;

export const StyledArrow = styled.i``;
