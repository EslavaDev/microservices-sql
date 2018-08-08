import React, { Component } from 'react';
import logo from './nan.png';
import './App.css';
import { Button, Alert , Form, FormGroup, Label, Input } from 'reactstrap';
import Atributtes from './components/Atributtes';
import AlertContainer from './containers/AlertPortal';
import AlertComponent from './components/alert';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      Db:null,
      Atto:null,
      alert:false,
      disable:false
    }
  }

  alert =() =>{
    setTimeout(() =>{this.setState({disable: false, alert:false})}, 2000)
    return(
      <AlertContainer>
        <AlertComponent>
          <Alert color="danger" isOpen={this.state.alert}>
            Ingrese una Db y/o Atto Valido!
          </Alert>
        </AlertComponent>
      </AlertContainer>
    )
  }

  dataRequest = async () => {
    this.setState({disable: true})
    const {Db, Atto} = this.state;
    let container ={};
      if(Db){
        container.Db = Db
      }
      if(Atto){
        container.Atto = Atto
      }
    console.log(Db, Atto)
    
    try{
      let response = await fetch('http://192.168.0.9:8080/api/support/id',{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(container)
      
    });
    console.log(response)
    let json = await response.json()
     console.log(json)
    await this.setState({data:json, disable:false})
  }catch(ex){
    console.log(ex)
    this.setState({ alert:true})

  }
}
  render() {
    console.log(this.state.data)

    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo}  className="App-logo" alt="logo" />
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
          <Button color="info" disabled={this.state.disable} onClick={()=> this.dataRequest()}>Submit</Button>
          </Form>
        </header>
        <Atributtes data={this.state.data}/>
        {(this.state.alert)?this.alert():''}
      </div>
    );
  }
}

export default App;
