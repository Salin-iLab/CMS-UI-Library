import { Ref, forwardRef } from 'react';
import { StyledInput, StyledInputLabel, StyledInputLabelText, StyledInputWraaper } from './Input.styled';
import { InputProps } from './Input.types';

export const Input = forwardRef(
	({ labelText, isLabel = true, fullWidth = false, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
		return (
			<StyledInputWraaper>
				<StyledInputLabel fullWidth={fullWidth}>
					{isLabel && <StyledInputLabelText>{labelText}</StyledInputLabelText>}
					<StyledInput ref={ref} {...props} />
				</StyledInputLabel>
			</StyledInputWraaper>
		);
	}
);
