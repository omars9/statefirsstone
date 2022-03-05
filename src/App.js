import "./App.css";
// import FullName from './Component/FullName';
// import Address from './Component/Address';
// import ProfilePhoto from './Component/ProfilePhoto';
// import Ckp_jsx from './Ckp_jsx';

// function App() {
//   return (
//     <div className="App">
//    <Ckp_jsx />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 50,
    isVisible: false,
    tasks: [
      { id: Math.random(), action: "learn props", isDone: true },
      { id: Math.random(), action: "learn state", isDone: false },
    ],
    inputValue: "",
  };

  del = (i) => {
    this.setState({ tasks: this.state.tasks.filter((el) => el.id !== i) });
  };

  complete = (i) => {
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === i ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };

  addTask = (text) => {
    const newTask = {
      id: Math.random(),
      action: text,
      isDone: false,
    };
    this.state.inputValue.trim() ==="" 
    ? alert('please fill the input')
    :
    this.setState({ tasks: [newTask,...this.state.tasks] });
    this.setState({inputValue:''})
  };

  // setState method is used to mutate data in the state
  //   inc = () => {
  //     this.setState({counter:this.state.counter+1})
  //   }
  //   dec = () => {
  //     this.setState({counter:this.state.counter-1})
  //   }

  // // control visibility state

  //   handleShow = () => {
  //     this.setState({isVisible:!this.state.isVisible})
  //   }
  // life cycle
  // mounting - updating - unmounting
  // mounting : an effect that occurs once, when the component is first mounted in the DOM

  // componentDidMount(){
  //   window.addEventListener('mouseover',this.inc)
  //   console.log('the component mounted')
  // }

  // updating: an effect that occurs whenever a change happens in the state
  // componentDidUpdate(){
  //   // alert('state is about to change')
  // }

  // componentWillUnmount(){
  //   // window.removeEventListener('mouseover',this.inc)
  // }

  render() {
    return (
      <div className="App">
        {/* <button  onClick={this.handleShow} >   {this.state.isVisible ? "Hide" : "Show"}  </button>
{
  this.state.isVisible &&
  <div>
          <h1>
            counter : {this.state.counter}
          </h1>
          <button  onClick={()=>this.inc()} >+</button>
          <button  onClick={()=>this.dec()}  >-</button>
        </div>
        } */}
        <form  onSubmit={(e)=>e.preventDefault()} >
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
          <button onClick={()=>this.addTask(this.state.inputValue)}  >add</button>
        </form>
        {this.state.tasks.map((el) => (
          <div key={el.id}>
            <h2 id={el.isDone ? "done" : ""}> {el.action} </h2>
            <button onClick={() => this.complete(el.id)}>Complete</button>
            <button onClick={() => this.del(el.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}
