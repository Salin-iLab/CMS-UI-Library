import { css } from '@emotion/react';
import { InputProps, InputStyledProps } from './Input.types';
import { colors } from '../../theme/colors';

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
				padding: ${svgPos === 'left' ? '10px 8px 10px 48px' : '10px 48px 10px 8px'};
			`;
		case 'lg':
			return css`
				font-size: 16px;
				padding: ${svgPos === 'left' ? '12px 10px 12px 48px' : '12px 48px 12px 10px'};
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
