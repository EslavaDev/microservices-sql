import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button , Form, FormGroup, Label, Input } from 'reactstrap';
import Atributtes from './containers/components/Atributtes';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      Db:'',
      Atto:''
    }
  }

  dataRequest = async () => {
    const {Db, Atto} = this.state;
    let response = await fetch('http://192.168.0.9:8080/api/support/id',{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({Db: Db, Atto: Atto})
      
    });
    let json = await response.json()
    this.setState({data:json.response})
}
  render() {
    console.log(this.state.Atto)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form inline>
          <FormGroup>
          <Label for="exampleEmail" hidden>Db</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Db" onChange={(e)=>this.setState({Db: e.target.value})}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Atto</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Atto" onChange={(e)=>this.setState({Atto: e.target.value})}/>
        </FormGroup>
        {' '}
          <Button color="info" onClick={()=> this.dataRequest()}>Submit</Button>
          </Form>
        </header>
        <Atributtes data={this.state.data}/>
      </div>
    );
  }
}

export default App;
