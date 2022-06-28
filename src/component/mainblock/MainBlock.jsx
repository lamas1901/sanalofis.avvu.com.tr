export default (props) => {
	return (
		<main className="main main-visible">

            <div className="chats">
                <div className="chat-body">

                    <div className="chat-header">
                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none" type="button" data-close="">
                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>

                        </button>

                        <div className="media chat-name align-items-center text-truncate">
                            <div className="avatar avatar-online d-none d-sm-inline-block mr-3">
                                <img src="assets/media/avatar/2.png" alt=""/>
                            </div>

                            <div className="media-body align-self-center ">
                                <h6 className="text-truncate mb-0">Catherine Richardson</h6>
                                <small className="text-muted">Online</small>
                            </div>
                        </div>

                        <ul className="nav flex-nowrap">
                            <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                                <a className="nav-link text-muted px-1" data-toggle="collapse" data-target="#searchCollapse" href="#" aria-expanded="false">
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>

                                </a>
                            </li>

                            <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                                <a className="nav-link text-muted px-1" href="#" title="Add People">
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>

                                </a>
                            </li>
                            <li className="nav-item list-inline-item d-none d-sm-block mr-0">
                                <div className="dropdown">
                                    <a className="nav-link text-muted px-1" href="#" role="button" title="Details" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                        </svg>

                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item align-items-center d-flex" href="#" data-chat-info-toggle="">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                              
                                            <span>View Info</span>
                                        </a>

                                        <a className="dropdown-item align-items-center d-flex" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"/>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
                                            </svg>

                                            <span>Mute Notifications</span> 
                                        </a>
                                        <a className="dropdown-item align-items-center d-flex" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                            </svg>

                                            <span>Wallpaper</span>
                                        </a>
                                        <a className="dropdown-item align-items-center d-flex" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                                            </svg>
                                              
                                            <span>Archive</span>
                                        </a>
                                        <a className="dropdown-item align-items-center d-flex" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                            </svg>
                                              
                                            <span>Delete</span>
                                        </a>
                                        <a className="dropdown-item align-items-center d-flex text-danger" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                            </svg>
                                              
                                            <span>Block</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item list-inline-item d-sm-none mr-0">
                                <div className="dropdown">
                                    <a className="nav-link text-muted px-1" href="#" role="button" title="Details" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                        </svg>

                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item align-items-center d-flex" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>

                                            <span>Call</span>    
                                        </a>
                                        <a className="dropdown-item align-items-center d-flex" href="#" data-toggle="collapse" data-target="#searchCollapse" aria-expanded="false">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                            </svg>

                                            <span>Search</span>    
                                        </a>
                                        
                                        <a className="dropdown-item align-items-center d-flex" href="#" data-chat-info-toggle="">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                              
                                            <span>View Info</span>
                                        </a>
                                        
                                        <a className="dropdown-item align-items-center d-flex" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"/>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
                                            </svg>

                                            <span>Mute Notifications</span> 
                                        </a>
                                        <a className="dropdown-item align-items-center d-flex" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                            </svg>

                                            <span>Wallpaper</span>
                                        </a>
                                        <a className="dropdown-item align-items-center d-flex" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                                            </svg>

                                            <span>Archive</span>
                                        </a>
                                        <a className="dropdown-item align-items-center d-flex" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                            </svg>
                                              
                                            <span>Delete</span>
                                        </a>
                                        <a className="dropdown-item align-items-center d-flex text-danger" href="#">
                                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                            </svg>
                                              
                                            <span>Block</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse border-bottom px-3" id="searchCollapse">
                        <div className="container-xl py-2 px-0 px-md-3">
                            <div className="input-group bg-light ">
                                <input type="text" className="form-control form-control-md border-right-0 transparent-bg pr-0" placeholder="Search"/>
                                <div className="input-group-append">
                                    <span className="input-group-text transparent-bg border-left-0">
                                        <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                        </svg>
                                          
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>

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

                    <div className="chat-footer">
                        <div className="attachment">
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                      
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                        <span>Gallery</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                                        </svg>
                                          
                                        <span>Audio</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                        </svg>
                                          
                                        <span>Document</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                          
                                        <span>Contact</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                          
                                        <span>Location</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                          
                                        <span>Poll</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <textarea className="form-control emojionearea-form-control" id="messageInput" rows="1" placeholder="Type your message here..."></textarea>
                        <div className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1" role="button">
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                              
                        </div>
                    </div>
                </div>

                <div className="chat-info">
                    <div className="d-flex h-100 flex-column">

                        <div className="chat-info-header px-2">
                            <div className="container-fluid">
                                <ul className="nav justify-content-between align-items-center">
                                    <li className="text-center">
                                        <h5 className="text-truncate mb-0">Profile Details</h5>
                                    </li>

                                    <li className="nav-item list-inline-item">
                                        <a className="nav-link text-muted px-0" href="#" data-chat-info-close="">
                                            <svg className="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                              
                                        
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="hide-scrollbar flex-fill">

                            <div className="text-center p-3">

                                <div className="avatar avatar-xl mx-5 mb-3">
                                    <img className="avatar-img" src="assets/media/avatar/2.png" alt=""/>
                                </div>

                                <h5 className="mb-1">Catherine Richardson</h5>
                                <p className="text-muted d-flex align-items-center justify-content-center">
                                    <svg className="hw-18 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                      
                                    <span>San Fransisco, CA</span>
                                </p>

                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="btn btn-outline-default btn-icon rounded-circle mx-1">
                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                        </svg>
                                          
                                    </div>
                                    <div className="btn btn-primary btn-icon rounded-circle text-light mx-1">
                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                        </svg>
                                          
                                    </div>
                                    <div className="btn btn-danger btn-icon rounded-circle text-light mx-1">
                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                        </svg>
                                          
                                    </div>
                                </div>
                            </div>

                            <div className="chat-info-group">
                                <a className="chat-info-group-header" data-toggle="collapse" href="#profile-info" role="button" aria-expanded="true" aria-controls="profile-info">
                                    <h6 className="mb-0">User Information</h6>
                                    
                                     <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                      
                                  </a>

                                <div className="chat-info-group-body collapse show" id="profile-info">
                                    <div className="chat-info-group-content list-item-has-padding">
                                        <ul className="list-group list-group-flush ">

                                            <li className="list-group-item border-0">
                                                <p className="small text-muted mb-0">Phone</p>
                                                <p className="mb-0">+01-222-364522</p>
                                            </li>

                                            <li className="list-group-item border-0">
                                                <p className="small text-muted mb-0">Email</p>
                                                <p className="mb-0">catherine.richardson@gmail.com</p>
                                            </li>

                                            <li className="list-group-item border-0">
                                                <p className="small text-muted mb-0">Address</p>
                                                <p className="mb-0">1134 Ridder Park Road, San Fransisco, CA 94851</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="chat-info-group">
                                <a className="chat-info-group-header" data-toggle="collapse" href="#shared-media" role="button" aria-expanded="true" aria-controls="shared-media">
                                    <h6 className="mb-0">Last Media</h6>
                                   
                                    <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>

                                  </a>

                                <div className="chat-info-group-body collapse show" id="shared-media">
                                    <div className="chat-info-group-content">
                                        <div className="form-row">
                                            <div className="col-4 col-md-2 col-xl-4">
                                                <a href="#">
                                                    <img src="assets/media/shared-photos/01.jpg" className="img-fluid rounded border" alt=""/>
                                                </a>
                                            </div>
                                            <div className="col-4 col-md-2 col-xl-4">
                                                <a href="#">
                                                    <img src="assets/media/shared-photos/02.jpg" className="img-fluid rounded border" alt=""/>
                                                </a>
                                            </div>
                                            <div className="col-4 col-md-2 col-xl-4">
                                                <a href="#">
                                                    <img src="assets/media/shared-photos/03.jpg" className="img-fluid rounded border" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="chat-info-group">
                                <a className="chat-info-group-header" data-toggle="collapse" href="#shared-files" role="button" aria-expanded="true" aria-controls="shared-files">
                                    <h6 className="mb-0">Documents</h6>
                                  
                                    <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                    </svg>
                                  
                                </a>

                                <div className="chat-info-group-body collapse show" id="shared-files">
                                    <div className="chat-info-group-content list-item-has-padding">
                                         <ul className="list-group list-group-flush">

                                            <li className="list-group-item">
                                                <div className="document">
                                                    <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                                        <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                                        </svg>
                                                          
                                                    </div>

                                                    <div className="document-body">
                                                        <h6 className="text-truncate">
                                                            <a href="#" className="text-reset" title="effects-of-global-warming.docs">Effects-of-global-warming.docs</a>
                                                        </h6>

                                                        <ul className="list-inline small mb-0">
                                                            <li className="list-inline-item">
                                                                <span className="text-muted">79.2 KB</span>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <span className="text-muted text-uppercase">docs</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="document-options ml-1">
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                                </svg>
                                                                
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">Download</a>
                                                                <a className="dropdown-item" href="#">Share</a>
                                                                <a className="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="list-group-item">
                                                <div className="document">
                                                    <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                                        <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                                        </svg>

                                                    </div>

                                                    <div className="document-body">
                                                        <h6 className="text-truncate">
                                                            <a href="#" className="text-reset" title="global-warming-data-2020.xlxs">Global-warming-data-2020.xlxs</a>
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

                                                    <div className="document-options ml-1">
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                                </svg>
                                                                
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">View</a>
                                                                <a className="dropdown-item" href="#">Share</a>
                                                                <a className="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="list-group-item">
                                                <div className="document">
                                                    <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                                        <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                                        </svg>

                                                    </div>

                                                    <div className="document-body">
                                                        <h6 className="text-truncate">
                                                            <a href="#" className="text-reset" title="great-presentation-on global-warming-2020.ppt">Great-presentation-on global-warming-2020.ppt</a>
                                                        </h6>

                                                        <ul className="list-inline small mb-0">
                                                            <li className="list-inline-item">
                                                                <span className="text-muted">79.2 KB</span>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <span className="text-muted text-uppercase">ppt</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="document-options ml-1">
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                                </svg>
                                                                
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">Download</a>
                                                                <a className="dropdown-item" href="#">Share</a>
                                                                <a className="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="calls px-0 py-2 p-xl-3">
                <div className="container-xl">
                    <div className="row">
                        <div className="col">
                            <div className="card card-bg-1 mb-3">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="avatar avatar-lg mb-3">
                                            <img className="avatar-img" src="assets/media/avatar/2.png" alt=""/>
                                        </div>
        
                                        <div className="d-flex flex-column align-items-center">
                                            <h5 className="mb-1">Catherine Richardson</h5>
                                            <p className="text-white rounded px-2 bg-primary">+01-202-265462</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-options">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                            </svg>
                                              
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Clear Call Log</a>
                                            <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-closer d-xl-none">
                                    <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-close="">
                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                          </svg>
                                          
                                    </button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className="row calls-log">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar avatar-primary mr-2">
                                            <span>
                                                <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"/>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                </svg>
                                                  
                                            </span>
                                        </div>

                                        <div className="media-body">
                                            <h6>Incoming Call</h6>

                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                <p className="text-muted mb-0">Just now</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                <p className="text-muted mb-0">2m 35s</p>
                                            </div>
                                        </div>

                                        <div className="media-options ml-1 d-none d-sm-block">
                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" >
                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                  </svg>
                                                  
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar avatar-primary mr-2">
                                            <span>
                                                <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"/>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                  </svg>
                                                  
                                            </span>
                                        </div>

                                        <div className="media-body">
                                            <h6>Outgoing Call</h6>

                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                <p className="text-muted mb-0">5 mins ago</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                <p className="text-muted mb-0">12m 25s</p>
                                            </div>
                                        </div>

                                        <div className="media-options ml-1 d-none d-sm-block">
                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" >
                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                  </svg>
                                                  
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar avatar-primary mr-2">
                                            <span>
                                                <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"/>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                </svg>
                                            </span>
                                        </div>

                                        <div className="media-body">
                                            <h6 className="text-danger">Missed Call</h6>

                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                <p className="text-muted mb-0">18 mins ago</p>
                                            </div>
                                        </div>

                                        <div className="media-options ml-1 d-none d-sm-block">
                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" >
                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                  </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar avatar-primary mr-2">
                                            <span>
                                                <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"/>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                </svg>
                                                  
                                            </span>
                                        </div>

                                        <div className="media-body">
                                            <h6>Outgoing Call</h6>

                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                <p className="text-muted mb-0">Yesterday at 10:45PM</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                <p className="text-muted mb-0">25m 18s</p>
                                            </div>
                                        </div>

                                        <div className="media-options ml-1 d-none d-sm-block">
                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" >
                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                  </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar avatar-primary mr-2">
                                            <span>
                                                <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"/>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                </svg>
                                            </span>
                                        </div>

                                        <div className="media-body">
                                            <h6>Incoming Call</h6>

                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                <p className="text-muted mb-0">16/05/2020 at 11:49AM</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                <p className="text-muted mb-0">0m 56s</p>
                                            </div>
                                        </div>

                                        <div className="media-options ml-1 d-none d-sm-block">
                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" >
                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                  </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <div className="avatar avatar-primary mr-2">
                                            <span>
                                                <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"/>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                </svg>
                                            </span>
                                        </div>

                                        <div className="media-body">
                                            <h6>Incoming Call</h6>

                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                <p className="text-muted mb-0">14/05/2020 at 11:49AM</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                <p className="text-muted mb-0">24m 19s</p>
                                            </div>
                                        </div>

                                        <div className="media-options ml-1 d-none d-sm-block">
                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" >
                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                  </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="friends px-0 py-2 p-xl-3">
                <div className="container-xl">
                    <div className="row">
                        <div className="col">
                            <div className="card card-body card-bg-1 mb-3">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="avatar avatar-lg mb-3">
                                        <img className="avatar-img" src="assets/media/avatar/3.png" alt=""/>
                                    </div>
    
                                    <div className="d-flex flex-column align-items-center">
                                        <h5 className="mb-1">Catherine Richardson</h5>
                                        <div className="d-flex mt-2">
                                            <div className="btn btn-primary btn-icon rounded-circle text-light mx-2">
                                                <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                                </svg>
                                            </div>
                                            <div className="btn btn-success btn-icon rounded-circle text-light mx-2">
                                                <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                </svg>
                                                  
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-options">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                            </svg>
                                              
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Remove</a>
                                            <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-closer d-xl-none">
                                    <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-close="">
                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                        </svg>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row friends-info">
                        <div className="col">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Local Time</p>
                                                <p className="mb-0">10:25 PM</p>
                                            </div>
                                            <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Birthdate</p>
                                                <p className="mb-0">20/11/1992</p>
                                            </div>
                                            <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                            </svg>
                                              
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Phone</p>
                                                <p className="mb-0">+01-222-364522</p>
                                            </div>
                                            <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Email</p>
                                                <p className="mb-0">catherine.richardson@gmail.com</p>
                                            </div>
                                            <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Website</p>
                                                <p className="mb-0">www.catherichardson.com</p>
                                            </div>
                                            <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Address</p>
                                                <p className="mb-0">1134 Ridder Park Road, San Fransisco, CA 94851</p>
                                            </div>
                                            <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>


                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Facebook</p>
                                                <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                            </div>
                                            <svg className="text-muted hw-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Twitter</p>
                                                <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                            </div>
                                            <svg className="text-muted hw-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Instagram</p>
                                                <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                            </div>
                                            <svg className="text-muted hw-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Linkedin</p>
                                                <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                            </div>
                                            <svg className="text-muted hw-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="profile">
                <div className="page-main-heading sticky-top py-2 px-3 mb-3">

                    <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none" type="button" data-close="">
                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                          </svg>
                    </button>

                    <div className="pl-2 pl-xl-0">
                        <h5 className="font-weight-semibold">Settings</h5>
                        <p className="text-muted mb-0">Update Personal Information &amp; Settings</p>
                    </div>
                </div>

                <div className="container-xl px-2 px-sm-3">
                    <div className="row">
                        <div className="col">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h6 className="mb-1">Account</h6>
                                    <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                </div>
                                
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="firstName">First Name</label>
                                                <input type="text" className="form-control form-control-md" id="firstName" placeholder="Type your first name" value="Catherine"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="lastName">Last Name</label>
                                                <input type="text" className="form-control form-control-md" id="lastName" placeholder="Type your last name" value="Richardson"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="mobileNumber">Mobile number</label>
                                                <input type="text" className="form-control form-control-md" id="mobileNumber" placeholder="Type your mobile number" value="+01-222-364522"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="birthDate">Birth date</label>
                                                <input type="text" className="form-control form-control-md" id="birthDate" placeholder="dd/mm/yyyy" value="20/11/1992"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="emailAddress">Email address</label>
                                                <input type="email" className="form-control form-control-md" id="emailAddress" placeholder="Type your email address" value="catherine.richardson@gmail.com"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="webSite">Website</label>
                                                <input type="text" className="form-control form-control-md" id="webSite" placeholder="Type your website" value="www.catherichardson.com"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="Address">Address</label>
                                                <input type="text" className="form-control form-control-md" id="Address" placeholder="Type your address" value="1134 Ridder Park Road, San Fransisco, CA 94851"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer d-flex justify-content-end">
                                    <button type="button" className="btn btn-link text-muted mx-1">Reset</button>
                                    <button type="button" className="btn btn-primary">Save Changes</button>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header">
                                    <h6 className="mb-1">Social network profiles</h6>
                                    <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                </div>
                                
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="facebookId">Facebook</label>
                                                <input type="text" className="form-control form-control-md" id="facebookId" placeholder="Username"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="twitterId">Twitter</label>
                                                <input type="text" className="form-control form-control-md" id="twitterId" placeholder="Username"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="instagramId">Instagram</label>
                                                <input type="text" className="form-control form-control-md" id="instagramId" placeholder="Username"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="linkedinId">Linkedin</label>
                                                <input type="text" className="form-control form-control-md" id="linkedinId" placeholder="Username"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer d-flex justify-content-end">
                                    <button type="button" className="btn btn-link text-muted mx-1">Reset</button>
                                    <button type="button" className="btn btn-primary">Save Changes</button>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header">
                                    <h6 className="mb-1">Password</h6>
                                    <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                </div>
                                
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label for="current-password">Current Password</label>
                                                    <input type="password" className="form-control form-control-md" id="current-password" placeholder="Current password" autocomplete="on"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label for="new-password">New Password</label>
                                                    <input type="password" className="form-control form-control-md" id="new-password" placeholder="New password" autocomplete="off"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label for="repeat-password">Repeat Password</label>
                                                    <input type="password" className="form-control form-control-md" id="repeat-password" placeholder="Repeat password" autocomplete="off"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="card-footer d-flex justify-content-end">
                                    <button type="button" className="btn btn-link text-muted mx-1">Reset</button>
                                    <button type="button" className="btn btn-primary">Save Changes</button>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header">
                                    <h6 className="mb-1">Privacy</h6>
                                    <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                </div>
                                
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush list-group-sm-column">
                                               
                                        <li className="list-group-item py-2">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="mb-0">Profile Picture</p>
                                                    <p className="small text-muted mb-0">Select who can see my profile picture</p>
                                                </div>
                                                <div className="dropdown mr-2">
                                                    <button className="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Public
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Public</a>
                                                        <a className="dropdown-item" href="#">Friends</a>
                                                        <a className="dropdown-item" href="#">Selected Friends</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                               
                                        <li className="list-group-item py-2">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="mb-0">Last Seen</p>
                                                    <p className="small text-muted mb-0">Select who can see my last seen</p>
                                                </div>
                                                <div className="dropdown mr-2">
                                                    <button className="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Public
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Public</a>
                                                        <a className="dropdown-item" href="#">Friends</a>
                                                        <a className="dropdown-item" href="#">Selected Friends</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                               
                                        <li className="list-group-item py-2">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="mb-0">Groups</p>
                                                    <p className="small text-muted mb-0">Select who can add you in groups</p>
                                                </div>
                                                <div className="dropdown mr-2">
                                                    <button className="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Public
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Public</a>
                                                        <a className="dropdown-item" href="#">Friends</a>
                                                        <a className="dropdown-item" href="#">Selected Friends</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                               
                                        <li className="list-group-item py-2">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="mb-0">Status</p>
                                                    <p className="small text-muted mb-0">Select who can see my status updates</p>
                                                </div>
                                                <div className="dropdown mr-2">
                                                    <button className="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Public
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Public</a>
                                                        <a className="dropdown-item" href="#">Friends</a>
                                                        <a className="dropdown-item" href="#">Selected Friends</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                               
                                        <li className="list-group-item py-2">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="mb-0">Read receipts</p>
                                                    <p className="small text-muted mb-0">If turn off this option you won't be able to see read recipts</p>
                                                </div>
                                                <div className="custom-control custom-switch mr-2">
                                                    <input type="checkbox" className="custom-control-input" id="readReceiptsSwitch" checked=""/>
                                                    <label className="custom-control-label" for="readReceiptsSwitch">&nbsp;</label>
                                                </div>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div className="card-footer d-flex justify-content-end">
                                    <button type="button" className="btn btn-link text-muted mx-1">Reset</button>
                                    <button type="button" className="btn btn-primary">Save Changes</button>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header">
                                    <h6 className="mb-1">Security</h6>
                                    <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                </div>
                                
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush list-group-sm-column">    
                                        <li className="list-group-item py-2">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="mb-0">Use two-factor authentication</p>
                                                    <p className="small text-muted mb-0">Ask for a code if attempted login from an unrecognised device or browser.</p>
                                                </div>
                                                <div className="custom-control custom-switch mr-2">
                                                    <input type="checkbox" className="custom-control-input" id="twoFactorSwitch" checked=""/>
                                                    <label className="custom-control-label" for="twoFactorSwitch">&nbsp;</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-2">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="mb-0">Get alerts about unrecognised logins</p>
                                                    <p className="small text-muted mb-0">You will be notified if anyone logs in from a device or browser you don't usually use</p>
                                                </div>
                                                <div className="custom-control custom-switch mr-2">
                                                    <input type="checkbox" className="custom-control-input" id="unrecognisedSwitch" checked=""/>
                                                    <label className="custom-control-label" for="unrecognisedSwitch">&nbsp;</label>
                                                </div>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-link text-muted mx-1">Reset</button>
                                    <button className="btn btn-primary" type="button">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
	)
}