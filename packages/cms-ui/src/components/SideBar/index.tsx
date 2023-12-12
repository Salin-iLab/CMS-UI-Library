import { forwardRef, MouseEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
	StyledSideBarIcon,
	StyledSideBarList,
	StyledSideBarMenuItemWrapper,
	StyledSideBarTitle,
	StyledSideBarWrapper,
} from './SideBar.styled';
import { SideBarMenuitemProps, SideBarProps } from './SideBar.types';

export const SideBarMenuItem = forwardRef<HTMLLIElement, SideBarMenuitemProps>(
	({ menu, colorTypes = 'blue', ...props }, ref) => {
		const nav = useNavigate();
		const location = useLocation();
		const [isOpen, setIsOpen] = useState(false);
		const { icon, name, path, children } = menu;

		const onClick = (e: MouseEvent<HTMLLIElement>) => {
			if (path) {
				nav(path);

				return;
			}

			setIsOpen(prev => !prev);

			if (props.onClick) {
				props.onClick(e);
			}
		};

		console.log(location);

		return (
			<>
				<StyledSideBarMenuItemWrapper
					onClick={e => onClick(e)}
					colorTypes={colorTypes}
					isOpen={isOpen}
					{...props}
					ref={ref}>
					<StyledSideBarIcon colorTypes={colorTypes} isOpen={isOpen}>
						{icon}
					</StyledSideBarIcon>
					<StyledSideBarTitle>{name}</StyledSideBarTitle>
					<i>test</i>
				</StyledSideBarMenuItemWrapper>
				{isOpen && (
					<StyledSideBarList>
						{children?.map(menu => (
							<SideBarMenuItem menu={menu} key={menu.name} />
						))}
					</StyledSideBarList>
				)}
			</>
		);
	}
);

export const SideBar = forwardRef<HTMLUListElement, SideBarProps>(({ menuList, ...props }, ref) => {
	return (
		<StyledSideBarWrapper>
			<StyledSideBarList {...props} ref={ref}>
				{menuList.map(menu => (
					<SideBarMenuItem menu={menu} key={menu.name} />
				))}
			</StyledSideBarList>
		</StyledSideBarWrapper>
	);
});
