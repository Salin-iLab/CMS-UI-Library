import { css } from '@emotion/react';

import { CheckBoxStyledProps } from './CheckBox.types';

export const getCheckBoxSize = (size: CheckBoxStyledProps['sizes']) => {
	switch (size) {
		case 'sm':
			return css`
				width: 14px;
				height: 14px;
			`;
		case 'md':
			return css`
				width: 16px;
				height: 16px;
			`;
		case 'lg':
			return css`
				width: 20px;
				height: 20px;
			`;
	}
};

export const getCheckBoxFontSizes = (size: CheckBoxStyledProps['sizes']) => {
	switch (size) {
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
