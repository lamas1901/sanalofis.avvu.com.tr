import React from 'react';
import { client as WebSocket } from 'websocket';

console.log(WebSocket)

class Messages extends React.Component {


	componentDidMout(){
		this.client.connect(
			'ws://127.0.0.1:8000/ws/chats/',null,null,null,
			{
				cookie:'sessionid=wzo8oqbdmhivh6niiunipd88v8hblexr'
			}
		)
	}

	render() {
		return (
			<div className="chat-content p-2" id="messageBody">
		        <div className="container">

		            <div className="message-day">

		                <div className="message-divider sticky-top pb-2" data-label="Yesterday">&nbsp;</div>

		                <div className="message">
		                    <div className="message-wrapper">
		                        <div className="message-content">
		                            <span>I have to give a presentation on global warming on Friday, and I am so nervous.</span>
		                        </div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>
		                        <span className="message-date">9:12am</span>
		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		                <div className="message self">
		                    <div className="message-wrapper">
		                        <div className="message-content">
		                            <span>First of all, you need to understand the subject matter thoroughly. You need to know what is global warming, what causes global warming, and what people should do to abate the effects of global warming.</span>
		                        </div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>

		                        <span className="message-date">9:12am</span>
		                        <span className="message-status">Edited</span>

		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
		                                    </svg>

		                                    <span>Edit</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		                <div className="message">
		                    <div className="message-wrapper">
		                        <div className="message-content">
		                            <span>I have done a lot of research on the subject, and I know I can answer any questions I will receive from the audience.</span>
		                        </div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>
		                        <span className="message-date">9:12am</span>
		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		                <div className="message">
		                    <div className="message-wrapper">
		                        <div className="message-content">
		                            <span>I should talk about more precisely the sequence of my presentation?</span>
		                        </div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>
		                        <span className="message-date">9:12am</span>
		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		                <div className="message self">
		                    <div className="message-wrapper">
		                        <div className="message-content"><span>Yes, what you should present first, second and third…</span></div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>

		                        <span className="message-date">9:12am</span>

		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
		                                    </svg>

		                                    <span>Edit</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                    
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		                <div className="message">
		                    <div className="message-wrapper">
		                        <div className="message-content">
		                            <div className="document">
		                                <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
		                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                </div>

		                                <div className="document-body">
		                                    <h6>
		                                        <a href="#" className="text-reset" title="global-warming-data-2020.xlxs">global-warming-data-2020.xlxs</a>
		                                    </h6>

		                                    <ul className="list-inline small mb-0">
		                                        <li className="list-inline-item">
		                                            <span className="text-muted">79.2 KB</span>
		                                        </li>
		                                        <li className="list-inline-item">
		                                            <span className="text-muted text-uppercase">xlxs</span>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>

		                        <span className="message-date">9:12am</span>

		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
		                                    </svg>

		                                    <span>Download</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                
		                <div className="message">
		                    <div className="message-wrapper">
		                        <div className="message-content"><span>If that is the case, then I already have an outline. To make it easy for my audience to follow the presentation, I intend to post the outline on the board at all time during my speech.</span></div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>
		                        <span className="message-date">9:12am</span>
		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18  rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>

		            <div className="message-day">

		                <div className="message-divider sticky-top pb-2" data-label="Today">&nbsp;</div>

		                <div className="message self">
		                    <div className="message-wrapper">
		                        <div className="message-content"><span>Good idea! By the way, do you have any facts to back you up? For example, change of climate, yearly disasters…</span></div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>

		                        <span className="message-date">9:12am</span>
		                        <span className="message-status">Edited</span>

		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>
		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
		                                    </svg>

		                                    <span>Edit</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="message">
		                    <div className="message-wrapper">
		                        <div className="message-content">
		                            <h6>I have shared some photos, Please have a look.</h6>
		                            <div className="form-row">
		                                <div className="col">
		                                    <a className="popup-media" href="assets/media/shared-photos/01.jpg">
		                                        <img className="img-fluid rounded" src="assets/media/shared-photos/01.jpg" alt=""/>
		                                    </a>
		                                </div>
		                                <div className="col">
		                                    <a className="popup-media" href="assets/media/shared-photos/02.jpg">
		                                        <img className="img-fluid rounded" src="assets/media/shared-photos/02.jpg" alt=""/>
		                                    </a>
		                                </div>
		                                <div className="col">
		                                    <a className="popup-media" href="assets/media/shared-photos/03.jpg">
		                                        <img className="img-fluid rounded" src="assets/media/shared-photos/03.jpg" alt=""/>
		                                    </a>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>
		                        <span className="message-date">9:12am</span>
		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
		                                    </svg>
		                                      
		                                    <span>Download</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		                <div className="message">
		                    <div className="message-wrapper">
		                        <div className="message-content"><span>No, I have not thought about that. I better get some statistics from the Internet. I should not have any problems since the Internet has all kinds of data.</span></div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>
		                        <span className="message-date">9:12am</span>
		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18  rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		                <div className="message self">
		                    <div className="message-wrapper">
		                        <div className="message-content"><span>Pictures will keep your audience from being bored. In order for you to succeed, you need to keep them interested and involved.</span></div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>

		                        <span className="message-date">9:12am</span>

		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
		                                    </svg>

		                                    <span>Edit</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                
		                <div className="message">
		                    <div className="message-wrapper">
		                        <div className="message-content"><span>You are absolutely right. I will take time to practice and to learn to relax and express myself really well. Wish me luck, Catherine!</span></div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>
		                        <span className="message-date">9:12am</span>
		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                    
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                
		                <div className="message self">
		                    <div className="message-wrapper">
		                        <div className="message-content"><span>I know you. You can do it. Good luck, Jennifer!</span></div>
		                    </div>
		                    <div className="message-options">
		                        <div className="avatar avatar-sm"><img alt="" src="assets/media/avatar/6.png"/></div>

		                        <span className="message-date">Just now</span>

		                        <div className="dropdown">
		                            <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
		                                </svg>

		                            </a>

		                            <div className="dropdown-menu">
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
		                                    </svg>
		                                      
		                                    <span>Copy</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
		                                    </svg>

		                                    <span>Edit</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Replay</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
		                                    </svg>

		                                    <span>Forward</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
		                                    </svg>
		                                      
		                                    <span>Favourite</span>
		                                </a>
		                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
		                                    <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
		                                    </svg>
		                                      
		                                    <span>Delete</span>
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>

		        <div className="chat-finished" id="chat-finished"></div>
		    </div>
		)
	}

}

export default Messages;