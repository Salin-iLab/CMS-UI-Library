import { forwardRef } from 'react';

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
		{
			labelText,
			colorTypes = 'blue',
			isLabel = true,
			fullWidth = false,
			sizes = 'md',
			svgIcon,
			svgPos = 'left',
			customCSS,
			...props
		},
		ref
	) => {
		return (
			<StyledInputWraaper>
				<StyledInputLabel fullWidth={fullWidth} sizes={sizes} colorTypes={colorTypes}>
					{isLabel && <StyledInputLabelText sizes={sizes}>{labelText}</StyledInputLabelText>}
					<StyledInputBox>
						<StyledInput
							sizes={sizes}
							ref={ref}
							customCSS={customCSS}
							{...props}
							colorTypes={colorTypes}
							svgPos={svgPos}
							svgIcon={svgIcon}
						/>
						{svgIcon && <StyledInputIcon svgPos={svgPos}>{svgIcon}</StyledInputIcon>}
					</StyledInputBox>
				</StyledInputLabel>
			</StyledInputWraaper>
		);
	}
);
