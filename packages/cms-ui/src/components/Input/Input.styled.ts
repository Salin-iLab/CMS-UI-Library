import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../theme/colors';
import {
	InputStyledIconProps,
	InputStyledLabelProps,
	InputStyledLabelTextProps,
	InputStyledProps,
} from './Input.types';
import { getInputColors, getInputSizes, getLabelFontSizes } from './Input.utils';

export const StyledInputWraaper = styled.div``;

export const StyledInputBox = styled.div`
	position: relative;
`;

export const StyledInput = styled.input<InputStyledProps>`
	appearance: none;
	background-color: #fff;
	width: 100%;
	border: 1px solid ${colors['gray'][300]};
	border-radius: 4px;
	box-sizing: border-box;
	transition: 0.3s;
	color: ${colors['gray'][700]};
	outline: none;

	${props => {
		return css`
			${getInputSizes(props.sizes, props.svgPos, props.svgIcon)}
		`;
	}}

	&:focus {
		${props => {
			return css`
				${getInputColors(props.colorTypes)}
			`;
		}}
	}

	&::placeholder {
		color: ${colors['gray'][300]};
	}

	${props => {
		return css`
			${props.customCSS}
		`;
	}}
`;

export const StyledInputLabel = styled.label<InputStyledLabelProps>`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
	display: inline-flex;
	flex-direction: column;
	gap: 6px;
`;

export const StyledInputLabelText = styled.span<InputStyledLabelTextProps>`
	font-size: 14px;
	color: ${colors['gray'][600]};

	${props => {
		return css`
			${getLabelFontSizes(props.sizes)}
		`;
	}}
`;

export const StyledInputIcon = styled.div<InputStyledIconProps>`
	position: absolute;
	display: flex;
	top: 50%;
	transform: translateY(-50%);
	left: 12px;

	${props => {
		return css`
			right: ${props.svgPos === 'right' ? '12px' : 'auto'};
			left: ${props.svgPos === 'left' ? '12px' : 'auto'};
		`;
	}}
`;
