import { forwardRef, useState } from 'react';

import { StyledOption, StyledOptionList, StyledOptionWrapper, StyledSelect } from './Select.styled';
import { Option, SelectProps } from './Select.types';

export const Select = forwardRef<HTMLDivElement, SelectProps>(
	({ options, colorTypes = 'blue', value, defaultValue, onChange, ...props }, ref) => {
		const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
		const [selectedData, setSelectedData] = useState<Option>({
			value: defaultValue || value,
			label:
				(defaultValue || value) &&
				(options.find(option => option.value === defaultValue)?.label ||
					options.find(option => option.value === value)?.label ||
					defaultValue ||
					value),
		});

		const onClickOption = (option: Option) => {
			setSelectedData(option);
		};

		const onToggleSelect = () => {
			setIsOptionOpen(prev => !prev);
		};

		return (
			<>
				<StyledSelect ref={ref} colorTypes={colorTypes} value={selectedData.value} onClick={onToggleSelect} {...props}>
					{selectedData.label}
				</StyledSelect>
				<StyledOptionWrapper isOpen={isOptionOpen}>
					<StyledOptionList>
						{options.map(option => (
							<StyledOption key={option.value} value={option.value} onClick={() => onClickOption(option)}>
								{option.label}
							</StyledOption>
						))}
					</StyledOptionList>
				</StyledOptionWrapper>
			</>
		);
	}
);
