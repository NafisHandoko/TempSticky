import React, {Component} from 'react';
import './index.css';

class AddModal extends Component{
  render(){
    return(
      <>
        <button className="add-button"><ion-icon name="add"></ion-icon></button>
        <div className="add-modal">
          <div className="add-modal-content">
            <h1>Welcome</h1>
            <p>Hello blababla it's just a test</p>
          </div>
        </div>
      </>
    )
  }
}

export default AddModal;