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
          <form className="add-modal-box">
            <div className="add-modal-content">
              <input className="add-modal-title-input" type="text" placeholder="add a title"/>
              <input className="add-modal-note-input" type="text" placeholder="your notes here"/>
            </div>
            <div className="add-modal-btn-group">
              <button type="button" className="add-modal-cancel-button" onClick={this.disableModal}><ion-icon name="close-sharp"></ion-icon></button>
              <button type="submit" className="add-modal-submit-button"><ion-icon name="checkmark-sharp"></ion-icon></button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default AddModal;