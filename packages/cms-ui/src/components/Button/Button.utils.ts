import { css } from '@emotion/react';

import { colors } from '../../theme/colors';
import { ButtonStyledProps } from './Button.types';

export const getButtonSize = (size: ButtonStyledProps['size']) => {
	switch (size) {
		case 'sm':
			return css`
				height: 34px;
				padding: 6px 12px;
				font-size: 14px;
			`;
		case 'md':
			return css`
				height: 40px;
				padding: 6px 16px;
				font-size: 16px;
			`;
		case 'lg':
			return css`
				height: 48px;
				padding: 6px 24px;
				font-size: 18px;
			`;
	}
};

export const getButtonColorTypes = (color: ButtonStyledProps['colorTypes'], types: ButtonStyledProps['types']) => {
	if (!color) return null;

	switch (types) {
		case 'outline':
			return css`
				background-color: #fff;
				border: 1px solid ${colors[color][500]};
				color: ${colors[color][500]};

				&:hover {
					background-color: ${colors[color][50]};
				}
			`;
		case 'solid':
			return css`
				background-color: ${colors[color][500]};
				border: none;
				color: #fff;

				&:hover {
					background-color: ${colors[color][600]};
				}
			`;
		case 'text':
			return css`
				background-color: #fff;
				border: none;
				color: ${colors[color][500]};

				&:hover {
					background-color: ${colors[color][50]};
				}
			`;
	}
};
