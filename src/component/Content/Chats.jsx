import { Route } from 'react-router-dom';

import SidebarChats from './sidebar/Chats';
import MainChats from './mainblock/Chats';


export default (props) => {
	return (
		<>
			<SidebarChats/>
			<MainChats/>
		</>
	)
}