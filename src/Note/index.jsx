import React, {Component} from 'react';
import './index.css';

class Note extends Component{
  render(){
    const bgColor = {backgroundColor: this.props.bgcolor};
    return(
      <div class="note" style={bgColor}>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    )
  }
}