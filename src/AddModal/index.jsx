import React, {Component} from 'react';
import './index.css';

class AddModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      style: {display: 'none'}
    }
    this.enableModal = () => {
      this.setState({
        style: {display: 'block'}
      })
    }
    this.disableModal = () => {
      this.setState({
        style: {display: 'none'}
      })
    }
  }
  render(){
    return(
      <>
        <button className="add-button" onClick={this.enableModal}><ion-icon name="add"></ion-icon></button>
        <div className="add-modal" style={this.state.style}>
          <div className="add-modal-box">
            <div className="add-modal-content">
              <h1>Welcome</h1>
              <p>Hello blababla it's just a test</p>
            </div>
            <div className="add-modal-btn-group">
              <button className="add-modal-cancel-button" onClick={this.disableModal}><ion-icon name="close-sharp"></ion-icon></button>
              <button className="add-modal-submit-button" onClick={this.disableModal}><ion-icon name="checkmark-sharp"></ion-icon></button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AddModal;