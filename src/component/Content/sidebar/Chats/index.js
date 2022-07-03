export default (props) => {
	return (
        <aside className="sidebar">
    		<div className="tab-pane active" id="chats-content">
                <div className="d-flex flex-column h-100">
                    <div className="hide-scrollbar h-100" id="chatContactsList">
                        <div className="sidebar-header sticky-top p-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="font-weight-semibold mb-0">Chats</h5>
                                <ul className="nav flex-nowrap">
                                    <li className="nav-item list-inline-item mr-1">
                                        <a className="nav-link text-muted px-1" href="#" title="Notifications" role="button" data-toggle="modal" data-target="#notificationModal">
                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item list-inline-item d-block d-xl-none mr-1">
                                        <a className="nav-link text-muted px-1" href="#" title="Appbar" data-toggle-appbar="">
                                            <svg className="hw-20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item list-inline-item mr-0">
                                        <div className="dropdown">
                                            <a className="nav-link text-muted px-1" href="#" role="button" title="Details" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                </svg>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" role="button" data-toggle="modal" data-target="#startConversation">New Chat</a>
                                                <a className="dropdown-item" href="#" role="button" data-toggle="modal" data-target="#createGroup">Create Group</a>
                                                <a className="dropdown-item" href="#" role="button" data-toggle="modal" data-target="#inviteOthers">Invite Others</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar-sub-header">
                                <div className="dropdown mr-2">
                                    <button className="btn btn-outline-default dropdown-toggle" type="button" data-chat-filter-list="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        All Chats
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" data-chat-filter="" data-select="all-chats" href="#">All Chats</a>
                                        <a className="dropdown-item" data-chat-filter="" data-select="friends" href="#">Friends</a>
                                        <a className="dropdown-item" data-chat-filter="" data-select="groups" href="#">Groups</a>
                                        <a className="dropdown-item" data-chat-filter="" data-select="unread" href="#">Unread</a>
                                        <a className="dropdown-item" data-chat-filter="" data-select="archived" href="#">Archived</a>
                                    </div>
                                </div>
                                <form className="form-inline">
                                    <div className="input-group">
                                        <input type="text" className="form-control search border-right-0 transparent-bg pr-0" placeholder="Search users" />
                                        <div className="input-group-append">
                                            <div className="input-group-text transparent-bg border-left-0" role="button">
                                                <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <ul className="contacts-list" id="chatContactTab" data-chat-list="">
                            <li className="contacts-item friends active">
                                <a className="contacts-link" href="javascript:;">
                                    <div className="avatar avatar-online">
                                        <img src="assets/media/avatar/2.png" alt="" />
                                    </div>
                                    <div className="contacts-content">
                                        <div className="contacts-info">
                                            <h6 className="chat-name text-truncate">Catherine Richardson</h6>
                                            <div className="chat-time">Just now</div>
                                        </div>
                                        <div className="contacts-texts">
                                            <p className="text-truncate">I’m sorry, I didn’t catch that. Could you please repeat?</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="contacts-item groups">
                                <a className="contacts-link" href="chat-2.html">
                                    <div className="avatar bg-success text-light">
                                        <span>
                                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="contacts-content">
                                        <div className="contacts-info">
                                            <h6 className="chat-name">Themeforest Group</h6>
                                            <div className="chat-time"><span>10:20 pm</span></div>
                                        </div>
                                        <div className="contacts-texts">
                                            <p className="text-truncate"><span>Jeny: </span>That’s pretty common. I heard that a lot of people had the same experience.</p>
                                            <div className="d-inline-flex align-items-center ml-1">
                                                <svg className="hw-16 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="contacts-item friends unread">
                                <a className="contacts-link" href="#">
                                    <div className="avatar avatar-offline bg-info text-light">
                                        <span>EW</span>
                                    </div>
                                    <div className="contacts-content">
                                        <div className="contacts-info">
                                            <h6 className="chat-name">Eva Walker</h6>
                                            <div className="chat-time">09:36 am</div>
                                        </div>
                                        <div className="contacts-texts">
                                            <p className="text-truncate">You’re kidding! I drive a motorcycle as well. What type of bike do you have?</p>
                                            <div className="badge badge-rounded badge-primary ml-1">2</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="contacts-item friends">
                                <a className="contacts-link" href="#">
                                    <div className="avatar avatar-busy"><img src="assets/media/avatar/3.png" alt="" /></div>
                                    <div className="contacts-content">
                                        <div className="contacts-info">
                                            <h6 className="chat-name">Christopher Garcia</h6>
                                            <div className="chat-time"><span>Yesterday</span></div>
                                        </div>
                                        <div className="contacts-texts">
                                            <svg className="hw-20 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                            </svg>
                                            <p className="text-truncate">Photo</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="contacts-item unread">
                                <a className="contacts-link" href="#">
                                    <div className="avatar avatar-online">
                                        <img src="assets/media/avatar/4.png" alt="" />
                                    </div>
                                    <div className="contacts-content">
                                        <div className="contacts-info">
                                            <h6 className="chat-name">Christina Turner</h6>
                                            <div className="chat-time">
                                                <span>31/05/20</span>
                                            </div>
                                        </div>
                                        <div className="contacts-texts">
                                            <p className="text-truncate">I’m working hard in Maths, Physics and Chemistry. I have planning to appear in I.I.T. after XII.</p>
                                            <div className="badge badge-rounded badge-primary ml-1">10</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="contacts-item friends">
                                <a className="contacts-link" href="#">
                                    <div className="avatar avatar-offline">
                                        <img src="assets/media/avatar/5.png" alt="" />
                                    </div>
                                    <div className="contacts-content">
                                        <div className="contacts-info">
                                            <h6 className="chat-name">Tammy Martinez</h6>
                                            <div className="chat-time">
                                                <span>24/04/20</span>
                                            </div>
                                        </div>
                                        <div className="contacts-texts">
                                            <svg className="hw-20 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                            </svg>
                                            <p className="text-truncate">project_guidelines.docs</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="contacts-item friends">
                                <a className="contacts-link" href="#">
                                    <div className="avatar avatar-online"><img src="assets/media/avatar/6.png" alt="" /></div>
                                    <div className="contacts-content">
                                        <div className="contacts-info">
                                            <h6 className="chat-name">Bonnie Torres</h6>
                                            <div className="chat-time"><span>20/04/20</span></div>
                                        </div>
                                        <div className="contacts-texts">
                                            <p className="text-truncate">Catch you later! Bye-bye!</p>
                                            <div className="d-inline-flex align-items-center ml-1">
                                                <svg className="hw-16 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="contacts-item friends">
                                <a className="contacts-link" href="#">
                                    <div className="avatar avatar-offline"><img src="assets/media/avatar/7.png" alt="" /></div>
                                    <div className="contacts-content">
                                        <div className="contacts-info">
                                            <h6 className="chat-name">Jacqueline James</h6>
                                            <div className="chat-time"><span>15/02/20</span></div>
                                        </div>
                                        <div className="contacts-texts">
                                            <svg className="hw-16 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            <p className="text-truncate">Missed call</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="contacts-item archived">
                                <a className="contacts-link" href="#">
                                    <div className="avatar avatar-away"><img src="assets/media/avatar/8.png" alt="" /></div>
                                    <div className="contacts-content">
                                        <div className="contacts-info">
                                            <h6 className="chat-name">Annie Richardson</h6>
                                            <div className="chat-time"><span>26/12/19</span></div>
                                        </div>
                                        <div className="contacts-texts">
                                            <p className="text-truncate">I think I have everything I need, thank you!</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
	)
}