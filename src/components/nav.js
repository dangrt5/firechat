import React from "react";
import {Link} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav style={{padding: "0, 12px"}} className="red darken-2">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Fire Chat!</Link>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chat-room">Chat Room</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Nav;
