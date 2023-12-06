import { css } from '@emotion/react';

import { colors } from '../../theme/colors';
import { DropDownStyledProps } from './DropDown.types';

export const getDropDownSizes = (sizes: DropDownStyledProps['size']) => {
	switch (sizes) {
		case 'sm':
			return css`
				font-size: 14px;
			`;
		case 'md':
			return css`
				font-size: 16px;
			`;
		case 'lg':
			return css`
				font-size: 18px;
			`;
	}
};

export const getDropDownColors = (color: DropDownStyledProps['colorTypes']) => {
	if (!color) return null;

	return css`
		color: ${colors[color][500]};
	`;
};
