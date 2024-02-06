import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import {
	SideBarArrowStyledProps,
	SideBarIconStyledProps,
	SideBarMenuItemStyledProps,
	SideBarMenuItemWrapperStyledProps,
	SideBarSubListStyledProps,
	SideBarWrapperStyledProps,
} from '../SideBar/SideBar.types';
import { colors } from './../../theme/colors';

export const SideBarSubListOpenAnimation = keyframes`
	from {
		opacity: 0;
		max-height: 0;
	}

	to {
		opacity: 1;
		max-height: 500px;
	}
`;

export const SideBarSubListCloseAnimation = keyframes`
	from {
		opacity: 1;
		max-height: 500px;
	}

	to {
		opacity: 0;
		max-height: 0;
	}
`;

export const StyledSideBarWrapper = styled.div<SideBarWrapperStyledProps>`
	width: 100%;
	max-width: 256px;
	border-inline-end: 2px solid ${colors.gray[200]};
	box-sizing: border-box;

	${props => {
		return css`
			${props.customCSS}
		`;
	}}
`;

export const StyledSideBarList = styled.ul<SideBarSubListStyledProps>`
	list-style: none;
	padding: 0;
	margin: 0;

	:not(&.sub-list) {
		overflow: auto;
	}

	&.sub-list {
		background-color: ${props => colors.gray[props.deps * 100]};

		animation: ${props =>
			props.isOpen
				? css`
						${SideBarSubListOpenAnimation} 0.2s ease-in-out forwards;
				  `
				: css`
						${SideBarSubListCloseAnimation} 0.2s ease-in-out forwards;
				  `};

		& > li {
		}
	}
`;

export const StyledSideBarMenuItemWrapper = styled.li<SideBarMenuItemWrapperStyledProps>`
	transition: all 0.2;
	box-sizing: border-box;
	cursor: pointer;

	&.sub-item > div {
		padding: ${props => `0 16px 0 ${16 + 14 * props.deps}px`};
	}
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

export const StyledSideBarMenuItemBox = styled.div<SideBarMenuItemStyledProps>`
	display: flex;
	align-items: center;
	height: 40px;
	margin: 8px 4px;
	padding: 0 16px;
	box-sizing: border-box;
	border-radius: 8px;
	gap: 8px;

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

export const StyledSideBarTitle = styled.span`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
	perspective: 100px;
`;

export const StyledArrow = styled.i<SideBarArrowStyledProps>`
	width: 12px;

	&::before {
		content: '';
		width: 6px;
		height: 6px;
		position: absolute;
		top: 50%;
		border-bottom: 2px solid #121212;
		border-right: 2px solid #121212;
		display: inline-block;
		transition: 0.2s all ease-in-out;
		transform: ${props => {
			return props.isOpen
				? 'translateY(-25%) rotateX(180deg) rotateZ(45deg)'
				: 'translateY(-50%) rotateX(0deg) rotateZ(45deg)';
		}};
	}
`;
