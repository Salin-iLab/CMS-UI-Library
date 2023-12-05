import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../theme/colors';
import { CheckBoxStyledProps, CheckBoxStyledWrapperProps } from './CheckBox.types';
import { getCheckBoxFontSizes, getCheckBoxSize } from './CheckBox.utils';

export const checkAnimation = keyframes`
  0%{
    width: 0;
    height: 0;
    border-color: white;
    transform: translate3d(0,0,0) rotate(45deg);
  }
  33%{
    width: 1px;
    height: 0;
    transform: translate3d(-50%,-50%,0) rotate(45deg);
  }
  100%{    
    width: 3px;
    height: 9px;
    border-color: white;
    transform: translate3d(-50%,-50%,0) rotate(45deg);
  }
`;

export const StyledCheckBoxWrapper = styled.label<CheckBoxStyledWrapperProps>`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	color: rgba(0, 0, 0, 0.88);
	list-style: none;
	font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif,
		apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
	display: inline-flex;
	cursor: pointer;
	align-items: flex-end;

	${props => {
		return css`
			${getCheckBoxFontSizes(props.sizes)}
			${props.customCSS}
		`;
	}}
`;

export const StyledCheckBoxBox = styled.span`
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 8px;
`;

export const StyledCheckBox = styled.input<CheckBoxStyledProps>`
	appearance: none;
	position: relative;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	border: 1px solid ${colors['gray'][300]};
	cursor: pointer;
	transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
	border-radius: 2px;

	${props => {
		return css`
			${getCheckBoxSize(props.sizes)}
		`;
	}}

	&:hover {
		border-color: ${props => {
			if (!props.colorTypes) return null;

			return colors[props.colorTypes][500];
		}};
	}

	&:checked {
		border: ${props => {
			if (!props.colorTypes) return null;
			const sizes = props.sizes === 'sm' ? '7px' : props.sizes === 'md' ? '8px' : '10px';

			return `${sizes} solid ${colors[props.colorTypes][500]}`;
		}};

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			border-right: 2px solid transparent;
			border-bottom: 2px solid transparent;
			border-color: white;
			transform: rotate(45deg);
			transform-origin: 70% center;
			animation: ${checkAnimation} 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
		}
	}
`;

export const StyledCheckBoxLabelText = styled.span``;
