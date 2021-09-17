import React, {Component} from 'react';
import './index.css';

class Note extends Component{
  render(){
    return(
      <div className={`note ${this.props.bgcolor}`}>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Note;