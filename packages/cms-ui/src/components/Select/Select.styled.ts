import styled from '@emotion/styled';

import { colors } from '../../theme/colors';
import { SelectStyledOptionWrapperProps, SelectStyledProps } from './Select.types';

export const StyledSelect = styled.div<SelectStyledProps>`
	display: flex;
	align-items: center;
	padding: 12px;
	border: 1px solid ${colors.gray[300]};
	font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif,
		apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
`;
export const StyledOptionWrapper = styled.div<SelectStyledOptionWrapperProps>`
	max-height: 0;
`;

export const StyledOptionList = styled.ul`
	box-sizing: border-box;
	background-color: cyan;
	padding: 4px;
	margin: 0;
`;
export const StyledOption = styled.li`
	box-sizing: border-box;
	list-style: none;
`;
