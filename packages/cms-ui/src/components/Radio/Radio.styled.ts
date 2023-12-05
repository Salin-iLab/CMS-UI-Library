import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../theme/colors';
import {
	RadioStyledBoxProps,
	RadioStyledGroupProps,
	RadioStyledIconProps,
	RadioStyledWrapperProps,
} from './Radio.types';
import { getCheckedRadioColorTypes } from './Radio.utils';

export const StyledRadioWrapper = styled.label<RadioStyledWrapperProps>`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	color: rgba(0, 0, 0, 0.88);
	font-size: 14px;
	list-style: none;
	font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif,
		apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
	display: inline-flex;
	cursor: pointer;
	align-items: flex-end;

	&:hover {
		.radio-icon {
			border-color: ${props => {
				if (!props.colorTypes) return '#d9d9d9';

				return colors[props.colorTypes][600];
			}};
		}
	}
`;

export const StyledRadioBox = styled.span<RadioStyledBoxProps>`
	position: relative;
	display: inline-flex;
	align-items: center;
	border-radius: 50%;

	&::after {
		position: absolute;
		inset-block-start: 0;
		inset-inline-start: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		visibility: hidden;
		content: '';
	}
`;

export const StyledRadio = styled.input`
	position: absolute;
	inset: 0;
	z-index: 1;
	opacity: 0;
	box-sizing: border-box;
	cursor: pointer;
	padding: 0;
	margin: 0;
`;

export const StyledRadioIcon = styled.span<RadioStyledIconProps>`
	box-sizing: border-box;
	position: relative;
	inset-block-start: 0;
	inset-inline-start: 0;
	display: block;
	width: 16px;
	height: 16px;
	border-style: solid;
	border-width: 1px;
	border-radius: 50%;
	transition: all 0.3s;
	padding: 0;
	margin: 0;

	background-color: ${props => {
		if (!props.colorTypes) return null;

		return props.checked ? colors[props.colorTypes][600] : '#fff';
	}};
	border-color: ${props => {
		if (!props.colorTypes) return null;

		return props.checked ? colors[props.colorTypes][600] : colors.gray[300];
	}};

	&::after {
		box-sizing: border-box;
		position: absolute;
		inset-block-start: 50%;
		inset-inline-start: 50%;
		display: block;
		width: 16px;
		height: 16px;
		margin-block-start: -8px;
		margin-inline-start: -8px;
		background-color: #fff;
		border-block-start: 0;
		border-inline-start: 0;
		border-radius: 16px;
		transform: scale(0);
		opacity: 0;
		transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
		content: '';

		${props => {
			return css`
				${getCheckedRadioColorTypes(props.colorTypes, props.checked)}
			`;
		}}
	}
`;

export const StyledRadioText = styled.span`
	display: inline-flex;
	font-size: 16px;
	line-height: 16px;
	padding-inline-start: 8px;
	padding-inline-end: 8px;
	vertical-align: bottom;
`;

export const StyledRadioGroup = styled.div<RadioStyledGroupProps>`
	display: flex;
	transition: 0.3s;
	gap: ${props => `${props.gap}px`};
	flex-direction: ${props => (props.direction === 'column' ? 'column' : 'row')};
`;
