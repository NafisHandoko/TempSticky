import React,{Component} from 'react';
import './App.css';
import Nav from './Nav/index';
import Note from './Note/index';
import AddModal from './AddModal/index';

// function App() {
//   return (
//     <>
//       <Nav/>
//       <div className="body-container">
//         <Note title="tesaja" body="halohalohalo" bgcolor="yellow"/>
//         <Note title="halo dunia" body="ini noteku yang lain" bgcolor="green"/>
//         <AddModal/>
//       </div>
//     </>
//   );
// }

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      notedata: [
        {id:"1", title:"tesaja", body:"halohalohalo", bgcolor:"yellow"},
        {id:"2", title:"halo dunia", body:"ini noteku yang lain", bgcolor:"green"}
      ]
    }
    this.handleSubmit = (data) => {
      console.log(data)
    }
  }
  render(){
    const notedata = this.state.notedata;
    return(
      <>
        <Nav/>
        <div className="body-container">
          {notedata.map((data) =>
            <Note key={data.id} title={data.title} body={data.body} bgcolor={data.bgcolor}/>
          )}
          <AddModal handler={this.handleSubmit}/>
        </div>
      </>
    )
  }
}

export default App;