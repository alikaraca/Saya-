import React, {Component} from 'react';
import Clock from './Clock.jsx'
import './App.css'
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      deadline: '31 Aralık 2017'
    }
  }
  changeDeadline(){
    this.setState({deadline: this.state.newDeadline})
  }
  render(){
    return(
      <div className="App">
        <div className="App-title">{this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='Yeni Tarih'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Gonder
          </Button>
        </Form>
      </div>
    )
  }
}
export default App;
