import React, { Component } from 'react';
import logo from './nan.png';
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
    console.log(Db, Atto)
    let response = await fetch('http://192.168.0.9:8080/api/support/id',{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({Db, Atto})
      
    });
    let json = await response.json()
    console.log('asdasdasdasd');
     console.log(json)
    this.setState({data:json})
}
  render() {
    console.log(this.state.data)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form inline>
          <FormGroup>
          <Label for="exampleEmail" hidden>Db</Label>
          <Input  name="email" id="exampleEmail" placeholder="Db" onChange={(e)=>this.setState({Db: e.target.value})}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Atto</Label>
          <Input  name="password" id="examplePassword" placeholder="Atto" onChange={(e)=>this.setState({Atto: e.target.value})}/>
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
