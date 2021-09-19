import React, {Component} from 'react';
import './index.css';

class AddModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      input: {
        title: '',
        note: '',
        notecolor: '#FFEBAE'
      },
      style: {
        display: 'none'
      }
    }
    this.displayModal = () => {
      this.setState({
        input: {
          title: '',
          note: '',
          notecolor: '#FFEBAE'
        },
        style: {display: this.state.style.display === 'none'?'block':'none'}
      })
    }
    this.handleChange = (event) => {
      this.setState({
        ...this.state,
        input: {
          ...this.state.input,
          [event.target.name]: event.target.value
        }
      })
    }
    this.handleSubmit = (event) => {
      event.preventDefault();
      this.props.handler('ini tesaja lho ya');
      this.displayModal();
    }
  }
  render(){
    return(
      <>
        <button className="add-button" onClick={this.displayModal}><ion-icon name="add"></ion-icon></button>
        <div className="add-modal" style={this.state.style}>
          <form className="add-modal-box" style={{backgroundColor: this.state.input.notecolor}} onSubmit={this.handleSubmit}>
            <div className="add-modal-content">
              <input name="title" className="add-modal-title-input" type="text" placeholder="add a title" value={this.state.input.title} onChange={this.handleChange}/>
              <textarea name="note" className="add-modal-note-input" placeholder="your notes here" value={this.state.input.note} onChange={this.handleChange}></textarea>
            </div>
            <div className="add-modal-btn-group">
              <button type="button" className="add-modal-cancel-button" onClick={this.displayModal}><ion-icon name="close-sharp"></ion-icon></button>
              <button type="submit" className="add-modal-submit-button"><ion-icon name="checkmark-sharp"></ion-icon></button>
            </div>
            <div className="note-color-radio">
              <input type="radio" name="notecolor" className="yellow-radio" value="#FFEBAE" onClick={this.handleChange} defaultChecked/>
              <input type="radio" name="notecolor" className="red-radio" value="#FFDBDB" onClick={this.handleChange}/>
              <input type="radio" name="notecolor" className="green-radio" value="#D8FFDC" onClick={this.handleChange}/>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default AddModal;