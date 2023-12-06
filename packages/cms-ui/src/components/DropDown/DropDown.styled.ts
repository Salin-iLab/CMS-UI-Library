import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '../../theme/colors';
import { DropDownStyledProps, DropDownIconStyledProps } from './DropDown.types';
import { getDropDownColors, getDropDownSizes } from './DropDown.utils';

export const StyledDropDownWrapper = styled.div<DropDownStyledProps>`
	position: relative;
	${props => {
		return css`
			${getDropDownSizes(props.size)}
			${getDropDownColors(props.colorTypes)}
			${props.customCSS}
		`;
	}}
`;

export const StyledDropDownLabel = styled.div`
	display: flex;
	align-items: center;
	padding: 8px;
	cursor: pointer;
`;

export const StyledDropDownIcon = styled.div<DropDownIconStyledProps>`
	margin-left: 10px;
	transition: transform 0.3s ease-in-out;
	transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

export const StyledDropDownList = styled.ul`
	position: absolute;
	z-index: 1050;
	display: inline-block;
	padding: 10px;
	margin: 0;
	list-style-type: none;
	border-radius: 10px;
	box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`;

export const StyledDropDownItem = styled.li`
	position: relative;
	width: auto;
	padding: 8px;
	cursor: pointer;

	&:hover {
		background-color: ${colors['gray'][100]};
	}
`;
