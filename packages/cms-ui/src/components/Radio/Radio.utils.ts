import { css } from '@emotion/react';

import { RadioStyledIconProps } from './Radio.types';

export const getCheckedRadioColorTypes = (
	color: RadioStyledIconProps['colorTypes'],
	checked: RadioStyledIconProps['checked']
) => {
	if (!color || !checked) return null;

	return css`
		transform: scale(0.375);
		opacity: 1;
		background-color: #fff;
		transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);
	`;
};
