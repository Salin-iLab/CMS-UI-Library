import { forwardRef } from 'react';

import { StyledCheckBox, StyledCheckBoxBox, StyledCheckBoxLabelText, StyledCheckBoxWrapper } from './CheckBox.styled';
import { CheckBoxProps } from './CheckBox.types';

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
	({ children, colorTypes = 'blue', sizes = 'md', customCSS, ...props }, ref) => {
		return (
			<StyledCheckBoxWrapper sizes={sizes} customCSS={customCSS}>
				<StyledCheckBoxBox>
					<StyledCheckBox {...props} ref={ref} colorTypes={colorTypes} sizes={sizes} type="checkbox" />
					<StyledCheckBoxLabelText>{children}</StyledCheckBoxLabelText>
				</StyledCheckBoxBox>
			</StyledCheckBoxWrapper>
		);
	}
);
