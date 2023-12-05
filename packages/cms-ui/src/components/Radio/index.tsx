import { forwardRef, PropsWithChildren, useContext, useState } from 'react';

import { RadioContext, RadioProvider } from './Radio.context';
import {
	StyledRadio,
	StyledRadioBox,
	StyledRadioGroup,
	StyledRadioIcon,
	StyledRadioText,
	StyledRadioWrapper,
} from './Radio.styled';
import { CompoundedComponent, RadioContextProps, RadioProps } from './Radio.types';

export const RadioGroup = ({
	children,
	direction = 'row',
	gap = 8,
	...props
}: PropsWithChildren<RadioContextProps>) => {
	const [value, setValue] = useState(props.defaultValue || props.value);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!('value' in props)) {
			setValue(e.target.value);
		}

		props.onChange(e);
		setValue(e.target.value);
	};

	const values: RadioContextProps = {
		value,
		onChange,
	};

	return (
		<RadioProvider value={values}>
			<StyledRadioGroup direction={direction} gap={gap}>
				{children}
			</StyledRadioGroup>
		</RadioProvider>
	);
};

export const RadioButton = forwardRef<HTMLInputElement, RadioProps>(
	({ colorTypes = 'blue', value, children, ...props }, ref) => {
		const radioContext = useContext(RadioContext);

		if (!children) {
			throw new Error("Radio component requires 'children' prop.");
		}

		return (
			<StyledRadioWrapper colorTypes={colorTypes}>
				<StyledRadioBox colorTypes={colorTypes}>
					<StyledRadio
						type="radio"
						value={value}
						checked={radioContext?.value !== undefined ? value === radioContext.value : undefined}
						onChange={radioContext?.onChange}
						{...props}
						ref={ref}
					/>
					<StyledRadioIcon
						className="radio-icon"
						checked={radioContext?.value !== undefined ? value === radioContext.value : undefined}
						colorTypes={colorTypes}
					/>
				</StyledRadioBox>
				<StyledRadioText>{children}</StyledRadioText>
			</StyledRadioWrapper>
		);
	}
);

export const Radio = RadioButton as CompoundedComponent;

Radio.Group = RadioGroup;
