import { Ref, forwardRef } from 'react';
import {
	StyledInput,
	StyledInputBox,
	StyledInputIcon,
	StyledInputLabel,
	StyledInputLabelText,
	StyledInputWraaper,
} from './Input.styled';
import { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ labelText, colorTypes, isLabel = true, fullWidth = false, sizes = 'md', svgIcon, svgPos = 'left', ...props },
		ref
	) => {
		return (
			<StyledInputWraaper>
				<StyledInputLabel fullWidth={fullWidth} sizes={sizes} colorTypes={colorTypes}>
					{isLabel && <StyledInputLabelText sizes={sizes}>{labelText}</StyledInputLabelText>}
					<StyledInputBox>
						<StyledInput sizes={sizes} colorTypes={colorTypes} svgPos={svgPos} svgIcon={svgIcon} ref={ref} {...props} />
						{svgIcon && <StyledInputIcon svgPos={svgPos}>{svgIcon}</StyledInputIcon>}
					</StyledInputBox>
				</StyledInputLabel>
			</StyledInputWraaper>
		);
	}
);
