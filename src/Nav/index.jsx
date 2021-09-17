import React, {Component} from 'react';
import './index.css';

class Nav extends Component{
  render(){
    return(
      <nav>
        <div class="container">
          <h1>TempSticky</h1>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Repo</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;