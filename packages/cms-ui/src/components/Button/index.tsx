import { Ref, forwardRef } from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button = forwardRef(
	(
		{ types = 'solid', size = 'md', colorTypes = 'blue', customCSS, children, ...props }: ButtonProps,
		ref: Ref<HTMLButtonElement>
	) => {
		return (
			<StyledButton ref={ref} {...props} types={types} size={size} colorTypes={colorTypes}>
				{children}
			</StyledButton>
		);
	}
);
