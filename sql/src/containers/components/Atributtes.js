import React from 'react';
import { Table } from 'reactstrap';
import Modal from './ModalTables';
export default class Example extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }


componentWillReceiveProps(){
    this.setState({data:this.props.data});
}
   componentWillUpdate(){
    
   }

  render() {
      console.log(this.state.data);
      const {data} = this.state
      let item;
      if(typeof data != 'undefined' && data != null){
      item = this.state.data.map((data,index) =>{
          return(
            <tr key={data._id}>
            <th scope="row">{index+1}</th>
            <td>{data.Db}</td>
            <td><Modal data={data.Data}buttonLabel="Data"/></td>
            <td>{data.Atto}</td>
          </tr> 
          )
      })
    }else{
        item = null
    }
    return (
        <div>
        
        
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Databases</th>
            <th>Data</th>
            <th>Atto</th>
          </tr>
        </thead>
        <tbody>
          {item}
        </tbody>
      </Table>
      </div>
    );
  }
}
