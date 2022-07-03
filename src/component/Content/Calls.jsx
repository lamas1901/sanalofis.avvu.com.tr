import { Route } from 'react-router-dom';

import SidebarCalls from './sidebar/Calls';
import MainCalls from './mainblock/Calls';

export default (props) => {
	return (
		<>
			<SidebarCalls/>
			<MainCalls/>
		</>
	)
}