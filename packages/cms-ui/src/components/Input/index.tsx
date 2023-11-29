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

export const Input = forwardRef(
	(
		{
			labelText,
			colorTypes,
			isLabel = true,
			fullWidth = false,
			sizes = 'md',
			svgIcon,
			svgPos = 'left',
			...props
		}: InputProps,
		ref: Ref<HTMLInputElement>
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
