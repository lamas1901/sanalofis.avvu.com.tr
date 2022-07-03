import { Routes, Route } from 'react-router-dom';

import Chats from './Chats';
import Calls from './Calls';
import Friends from './Friends';
import Profile from './Profile';

export default (props) => {
	return (
		<Routes>
			<Route index element={<Chats/>}></Route>
			<Route path='/calls' element={<Calls/>}></Route>
			<Route path='/friends' element={<Friends/>}></Route>
			<Route path='/profile' element={<Profile/>}></Route>
		</Routes>
	)
}