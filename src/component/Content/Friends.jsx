import { Route } from 'react-router-dom';

import SidebarFriends from './sidebar/Friends';
import MainFriends from './mainblock/Friends';

export default (props) => {
	return (
		<>
			<SidebarFriends/>
			<MainFriends/>
		</>
	)
}