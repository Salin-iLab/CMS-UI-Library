import { Outlet } from 'react-router-dom';
import { SearchIcon } from '../../../packages/cms-ui/assets/SvgIcon/SearchIcon';
import { SideBarMenuitemTypes } from '../../../packages/cms-ui/src/components/SideBar/SideBar.types';
import { SideBar } from '../../../packages/cms-ui/src/components/SideBar/index';

const DUMMY: SideBarMenuitemTypes[] = [
	{ name: 'Navigation One', icon: <SearchIcon />, path: '/' },
	{
		name: 'Navigation Three',
		icon: <SearchIcon />,
		children: [
			{ name: 'Navigation 3-1', icon: <SearchIcon />, path: '/test2' },
			{ name: 'Navigation 3-2', icon: <SearchIcon />, path: '/test3' },
		],
	},
	{ name: 'Navigation Twe', icon: <SearchIcon />, path: '/test' },
];

const Layout = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}>
			<SideBar menuList={DUMMY} colorTypes="red" />
			<Outlet />
		</div>
	);
};

export default Layout;
