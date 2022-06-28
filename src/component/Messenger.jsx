import {BrowserRouter as Router} from "react-router-dom";

import Navbar from './navbar/Navbar';
import Appbar from './appbar/Appbar';
import Sidebar from './sidebar/Sidebar';
import MainBlock from './mainblock/MainBlock';
import Modal from './modal/Modal';

export default (props) => {
	return (
		<div className="main-layout">
			<Router>
		        <Navbar/>

		        <Sidebar/>

		        <MainBlock/>

		        <Appbar/>

		        <Modal/>
	        </Router>
	    </div>
	)
}