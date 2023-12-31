import { css } from '@emotion/react';

import { colors } from '../../theme/colors';
import { InputProps, InputStyledProps } from './Input.types';

export const getInputSizes = (
	sizes: InputProps['sizes'],
	svgPos: InputProps['svgPos'],
	svgIcon: InputProps['svgIcon']
) => {
	switch (sizes) {
		case 'sm':
			return css`
				font-size: 14px;
				padding: ${svgPos === 'left'
					? `8px 12px 8px ${svgIcon ? '40px' : '12px'}`
					: `8px ${svgIcon ? '40px' : '12px'} 8px 12px`};
			`;
		case 'md':
			return css`
				font-size: 14px;
				padding: ${svgPos === 'left'
					? `10px 12px 10px ${svgIcon ? '40px' : '12px'}`
					: `10px ${svgIcon ? '40px' : '12px'} 10px 12px`};
			`;
		case 'lg':
			return css`
				font-size: 16px;
				padding: ${svgPos === 'left'
					? `12px 12px 12px ${svgIcon ? '40px' : '12px'}`
					: `12px ${svgIcon ? '40px' : '12px'} 12px 12px`};
			`;
	}
};

export const getLabelFontSizes = (sizes: InputProps['sizes']) => {
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

export const getInputColors = (color: InputStyledProps['colorTypes']) => {
	if (!color) return null;

	return css`
		border-color: ${colors[color][500]};
	`;
};
