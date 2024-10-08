import { forwardRef, MouseEvent, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import {
	StyledArrow,
	StyledSideBarIcon,
	StyledSideBarList,
	StyledSideBarMenuItemBox,
	StyledSideBarMenuItemWrapper,
	StyledSideBarTitle,
	StyledSideBarWrapper,
} from './SideBar.styled';
import { SideBarMenuitemProps, SideBarProps } from './SideBar.types';

export const SideBarMenuItem = forwardRef<HTMLLIElement, SideBarMenuitemProps>(
	({ menu, colorTypes = 'blue', deps, ...props }, ref) => {
		const nav = useNavigate();
		const { pathname } = useLocation();
		const [isOpen, setIsOpen] = useState(false);
		const nodeRef = useRef(null);
		const { icon, name, path, children } = menu;
		const isPath = path === pathname;
		const isChildrenPath = children?.some(child => child.path === pathname);

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

		useEffect(() => {
			if (isChildrenPath) {
				setIsOpen(true);
			}
		}, [isChildrenPath]);

		return (
			<>
				<StyledSideBarMenuItemWrapper onClick={e => onClick(e)} {...props} ref={ref} deps={deps}>
					<StyledSideBarMenuItemBox colorTypes={colorTypes} isPath={isPath}>
						<StyledSideBarIcon colorTypes={colorTypes} isPath={isPath} isOpen={isOpen}>
							{icon}
						</StyledSideBarIcon>
						<StyledSideBarTitle>
							{name} {children && <StyledArrow colorTypes={colorTypes} isOpen={isOpen} />}
						</StyledSideBarTitle>
					</StyledSideBarMenuItemBox>
				</StyledSideBarMenuItemWrapper>
				<Transition in={isOpen} nodeRef={nodeRef} timeout={200} mountOnEnter unmountOnExit>
					{state => (
						<StyledSideBarList className={`sub-list ${state}`} isOpen={isOpen} ref={nodeRef} deps={deps + 1}>
							{children?.map((menu, idx) => {
								const isSelect = menu.path === pathname;

								return (
									<SideBarMenuItem
										className="sub-item"
										menu={menu}
										key={`${menu.name}-${idx}`}
										colorTypes={colorTypes}
										isSelect={isSelect}
										deps={deps + 1}
									/>
								);
							})}
						</StyledSideBarList>
					)}
				</Transition>
			</>
		);
	}
);

export const SideBar = forwardRef<HTMLUListElement, SideBarProps>(
	({ menuList, logoJsx, customCSS, colorTypes = 'blue', ...props }, ref) => {
		return (
			<StyledSideBarWrapper customCSS={customCSS}>
				{logoJsx}
				<StyledSideBarList {...props} ref={ref} deps={0}>
					{menuList.map((menu, idx) => (
						<SideBarMenuItem menu={menu} colorTypes={colorTypes} key={`${menu.name}-${idx}`} deps={0} />
					))}
				</StyledSideBarList>
			</StyledSideBarWrapper>
		);
	}
);
