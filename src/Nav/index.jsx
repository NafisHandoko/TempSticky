import React, {Component} from 'react';
import './index.css';

class Nav extends Component{
  render(){
    return(
      <nav>
        <h2>TempSticky</h2>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Repo</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;