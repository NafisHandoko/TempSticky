import React, {Component} from 'react';
import './index.css';

class Note extends Component{
  render(){
    return(
      <div className={`note ${this.props.bgcolor}`}>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <button type="button" className="note-delete-button"><ion-icon name="trash" onClick={this.props.handler(this.props.id)}></ion-icon></button>
      </div>
    )
  }
}

export default Note;