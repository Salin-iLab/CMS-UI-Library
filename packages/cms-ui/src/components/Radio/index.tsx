import { PropsWithChildren, Ref, forwardRef, useContext, useState } from 'react';
import { RadioContext, RadioProvider } from './Radio.context';
import { StyledRadio, StyledRadioBox, StyledRadioIcon, StyledRadioWrapper, StyledText } from './Radio.styled';
import { CompoundedComponent, RadioContextProps, RadioProps } from './Radio.types';

export const RadioGroup = ({ children, ...props }: PropsWithChildren<RadioContextProps>) => {
	const [value, setValue] = useState(props.defaultValue || props.value);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!('value' in props)) {
			setValue(e.target.value);
		}

		if (props.onChange) {
			props.onChange(e);
			setValue(e.target.value);
		}
	};

	const values: RadioContextProps = {
		value,
		onChange,
		name: props.name,
	};

	return (
		<div>
			<RadioProvider value={values}>{children}</RadioProvider>
		</div>
	);
};

export const RadioButton = forwardRef(
	({ checked, colorTypes = 'blue', value, ...props }: RadioProps, ref: Ref<HTMLInputElement>) => {
		const radioContext = useContext(RadioContext);

		return (
			<StyledRadioWrapper colorTypes={colorTypes}>
				<StyledRadioBox colorTypes={colorTypes}>
					<StyledRadio
						type="radio"
						value={value}
						checked={radioContext?.value !== undefined ? value === radioContext.value : undefined}
						onChange={radioContext?.onChange}
						name={radioContext?.name}
						{...props}
						ref={ref}
					/>
					<StyledRadioIcon
						className="radio-icon"
						checked={radioContext?.value !== undefined ? value === radioContext.value : undefined}
						colorTypes={colorTypes}
					/>
				</StyledRadioBox>
				<StyledText>{value}</StyledText>
			</StyledRadioWrapper>
		);
	}
);

export const Radio = RadioButton as CompoundedComponent;

Radio.Group = RadioGroup;
