import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../theme/colors';
import { ButtonStyledProps } from './Button.types';
import { getButtonColorTypes, getButtonSize } from './Button.utils';

export const StyledButton = styled.button<ButtonStyledProps>`
	width: ${props => (props.fullWidth ? '100%' : 'auto')};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s;
	border-radius: ${props => (props.isRounded ? '4px' : '0px')};
	color: #fff;
	cursor: pointer;

	${props => {
		return css`
			${getButtonSize(props.size)};
			${getButtonColorTypes(props.colorTypes, props.types)}
			${props.customCSS}
		`;
	}}

	&:disabled {
		border-color: ${colors.gray[500]};
		background-color: ${colors.gray[300]};
		color: ${colors.gray[500]};
		cursor: not-allowed;
	}
`;
