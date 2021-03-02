/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {User,Avatar_02,Avatar_05,Avatar_09,Avatar_10} from "../../Entryfile/imagepath"

class Sidebar extends Component {
   render() {
    
    const {  location } = this.props
    let pathname = location.pathname

    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li> 
                <a href="/light/app/main/dashboard"><i className="la la-home" /> <span>Back to Home</span></a>
              </li>
              <li className="menu-title"><span>Chat Groups</span> <a href="#" data-toggle="modal" data-target="#add_group"><i className="fa fa-plus" /></a></li>
              <li> 
                <a href="/light/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span> 
                  <span className="chat-user">#General</span>
                </a>
              </li>
              <li> 
                <a href="/light/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span> 
                  <span className="chat-user">#Video Responsive Survey</span>
                </a>
              </li>
              <li> 
                <a href="/light/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span> 
                  <span className="chat-user">#500rs</span>
                </a>
              </li>
              <li> 
                <a href="/light/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span> 
                  <span className="chat-user">#warehouse</span>
                </a>
              </li>
              <li className="menu-title">Direct Chats <a href="#" data-toggle="modal" data-target="#add_chat_user"><i className="fa fa-plus" /></a></li>
              <li>
                <a href="/light/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_02} /><span className="status online" />
                  </span> 
                  <span className="chat-user">John Doe</span> <span className="badge badge-pill bg-danger">1</span>
                </a>
              </li>
              <li>
                <a href="/light/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_09} /><span className="status offline" />
                  </span> 
                  <span className="chat-user">Richard Miles</span> <span className="badge badge-pill bg-danger">7</span>
                </a>
              </li>
              <li>
                <a href="/light/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_10} /><span className="status away" />
                  </span> 
                  <span className="chat-user">John Smith</span>
                </a>
              </li>
              <li className="active">
                <a href="/light/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_05} /><span className="status online" />
                  </span> 
                  <span className="chat-user">Mike Litorus</span> <span className="badge badge-pill bg-danger">2</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
       
      );
   }
}

export default withRouter(Sidebar);
