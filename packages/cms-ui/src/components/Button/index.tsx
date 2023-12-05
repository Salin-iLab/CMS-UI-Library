import { forwardRef } from 'react';

import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ types = 'solid', size = 'md', colorTypes = 'blue', customCSS, isRounded = true, fullWidth, children, ...props },
		ref
	) => {
		return (
			<StyledButton
				ref={ref}
				{...props}
				types={types}
				size={size}
				colorTypes={colorTypes}
				isRounded={isRounded}
				fullWidth={fullWidth}
				customCSS={customCSS}>
				{children}
			</StyledButton>
		);
	}
);
