import { useState, Ref, forwardRef } from 'react';
import {
	StyledDropDownWrapper,
	StyledDropDownLabel,
	StyledDropDownIcon,
	StyledDropDownList,
	StyledDropDownItem,
} from './DropDown.styled';
import { DropDownProps, DropDownItem } from './DropDown.types';

export const DropDown = forwardRef(
	({ list, isIcon, colorTypes, size, customCSS, mainLabel }: DropDownProps, ref: Ref<HTMLDivElement>) => {
		const [isOpen, setIsOpen] = useState<boolean>(false);

		const handleItemClick = (item: DropDownItem) => {
			// alert(option.value);
			setIsOpen(false);
		};

		const renderOptions = (list: DropDownItem[] | undefined) => {
			if (!list) {
				return null;
			}

			return (
				<StyledDropDownList>
					{list.map(item => (
						<StyledDropDownItem key={item.value} onClick={() => handleItemClick(item)}>
							{item.label}
						</StyledDropDownItem>
					))}
				</StyledDropDownList>
			);
		};

		return (
			<StyledDropDownWrapper colorTypes={colorTypes} size={size} customCSS={customCSS}>
				<StyledDropDownLabel onClick={() => setIsOpen(!isOpen)}>{mainLabel}</StyledDropDownLabel>
				{isIcon && <StyledDropDownIcon isOpen={isOpen}>▶</StyledDropDownIcon>}
				{isOpen && renderOptions(list)}
			</StyledDropDownWrapper>
		);
	}
);
