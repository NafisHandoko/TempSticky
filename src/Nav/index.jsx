import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Nav extends Component{
  render(){
    return(
      <nav>
        <div className="nav-container">
          <Link to={'/'} className="nav-link"><h1>TempSticky</h1></Link>
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