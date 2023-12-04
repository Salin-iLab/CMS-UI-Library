import { Ref, forwardRef, useContext } from 'react';
import { StyledRadio, StyledRadioBox, StyledRadioIcon, StyledRadioWrapper, StyledText } from './Radio.styled';
import { RadioProps } from './Radio.types';
import { RadioGroupContext } from './Radio.context';

export const RadioGroup = ({}) => {
	const {} = useContext(RadioGroupContext);

	return;
};

export const Radio = forwardRef(
	({ value, checked, defaultChecked, colorTypes = 'blue', ...props }: RadioProps, ref: Ref<HTMLInputElement>) => {
		return (
			<StyledRadioWrapper colorTypes={colorTypes}>
				<StyledRadioBox colorTypes={colorTypes}>
					<StyledRadio type="radio" value={value} checked={checked} {...props} ref={ref} />
					<StyledRadioIcon className="radio-icon" checked={checked} colorTypes={colorTypes} />
				</StyledRadioBox>
				<StyledText>{value}</StyledText>
			</StyledRadioWrapper>
		);
	}
);
