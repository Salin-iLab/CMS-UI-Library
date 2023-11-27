import styled from '@emotion/styled';
import { ButtonStyledProps } from './Button.types';
import { css } from '@emotion/react';

const getButtonSize = (size: ButtonStyledProps['size']) => {
	switch (size) {
		case 'sm':
			return { height: '34px', padding: '8px 12px', 'font-size': '14px' };
		case 'md':
			return { height: '40px', padding: '8px 16px', 'font-size': '16px' };
		case 'lg':
			return { height: '48px', padding: '8px 24px', 'font-size': '18px' };
	}
};

export const StyledButton = styled.button<ButtonStyledProps>`
	display: flex;
	width: 100%;
	height: auto;

	${props => {
		return css`
			${getButtonSize(props.size)}
		`;
	}};
`;
