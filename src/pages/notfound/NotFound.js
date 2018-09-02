import React, { Component } from 'react';
import './NotFound.scss';

class NotFound extends Component {
  componentDidMount() { 
    const delList = document.querySelectorAll('.navbar, .footer, .chat-plugin')
    for(var el of delList){el.remove()}
  }
  
  render() {
    return (
      <div className="notfound">
        <div className="dialog">
          <div>
            <h1>The page you were looking for doesn't exist.</h1>
            <p>You may have mistyped the address or the page may have moved.</p>
          </div>
          <p>If you are the application owner check the logs for more information.</p>
        </div>
      </div>
    );
  }
}

export default NotFound;
