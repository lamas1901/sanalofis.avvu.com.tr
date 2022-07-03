import { Route } from 'react-router-dom';

import SidebarProfile from './sidebar/Profile';
import MainProfile from './mainblock/Profile';

export default (props) => {
	return (
		<>
			<SidebarProfile/>
			<MainProfile/>
		</>
	)
}