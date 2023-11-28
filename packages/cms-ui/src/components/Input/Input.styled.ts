import styled from '@emotion/styled';
import { colors } from '../../theme/colors';
import { InputStyledLabelProps, InputStyledProps } from './Input.types';

export const StyledInputWraaper = styled.div``;

export const StyledInput = styled.input<InputStyledProps>`
	appearance: none;
	border: 1px solid ${colors['gray'][400]};
	padding: 6px 8px;
	border-radius: 4px;
`;

export const StyledInputLabel = styled.label<InputStyledLabelProps>`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
	display: inline-flex;
	flex-direction: column;
	gap: 6px;
`;

export const StyledInputLabelText = styled.span`
	font-size: 14px;
	color: ${colors['gray'][600]};
`;
