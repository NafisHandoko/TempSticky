import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Nav extends Component{
  constructor(props){
    super(props);
    this.state = {
      style: {display: 'none'}
    }
    this.displayModal = () => {
      this.setState({
        style: {display: this.state.style.display === 'none'?'block':'none'}
      })
    }
  }
  render(){
    return(
      <>
        <nav>
          <div className="nav-container">
            <h1>TempSticky</h1>
            <ul>
              <li><a onClick={this.displayModal}>About</a></li>
              <li><a href="https://github.com/nafishandoko/tempsticky">Repo</a></li>
            </ul>
          </div>
        </nav>
        <div className="about-modal" style={this.state.style}>
          <div className="about-modal-box">
            <div className="about-modal-content">
              <h1>About</h1>
              <p>This is just about modal</p>
            </div>
            <div className="about-modal-btn-group">
              <button type="button" className="about-modal-ok-button" onClick={this.displayModal}>Ok</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Nav;