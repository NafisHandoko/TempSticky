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
          <div className="add-modal-content">
            <h1>Welcome</h1>
            <p>Hello blababla it's just a test</p>
          </div>
          <button onClick={this.disableModal}>Ok</button>
        </div>
      </>
    )
  }
}

export default AddModal;