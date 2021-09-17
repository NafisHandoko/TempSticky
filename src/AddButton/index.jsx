import React, {Component} from 'react';
import './index.css';

class AddButton extends Component{
  render(){
    return(
      <button className="add-button"><ion-icon name="add"></ion-icon></button>
    )
  }
}

export default AddButton;