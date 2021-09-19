import React, {Component} from 'react';
import './index.css';

class AddModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      style: {display: 'none'},
      input: {
        title: '',
        note: ''
      }
    }
    this.displayModal = () => {
      this.setState({
        style: {display: this.state.style.display === 'none'?'block':'none'}
      })
    }
    this.handleChange = (event) => {
      this.setState({
        ...this.state,
        input: {
          ...this.state.input,
          [event.target.id]: event.target.value
        }
      })
    }
  }
  render(){
    return(
      <>
        <button className="add-button" onClick={this.displayModal}><ion-icon name="add"></ion-icon></button>
        <div className="add-modal" style={this.state.style}>
          <form className="add-modal-box">
            <div className="add-modal-content">
              <input id="title" className="add-modal-title-input" type="text" placeholder="add a title" value={this.state.input.title} onChange={this.handleChange}/>
              <textarea id="note" className="add-modal-note-input" placeholder="your notes here" value={this.state.input.note} onChange={this.handleChange}></textarea>
            </div>
            <div className="add-modal-btn-group">
              <button type="button" className="add-modal-cancel-button" onClick={this.displayModal}><ion-icon name="close-sharp"></ion-icon></button>
              <button type="submit" className="add-modal-submit-button"><ion-icon name="checkmark-sharp"></ion-icon></button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default AddModal;