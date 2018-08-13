import React, {PureComponent} from 'react';
import { Table } from 'reactstrap';
import Modal from './ModalTables';


export default class Example extends PureComponent {


  render() {

    return (
        <div style={{background:"white !important"}}>
        
        
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
          {
            (this.props.data)?this.props.data.map((item,index) =>{
              return(
                <tr key={item._id}>
                <th scope="row">{index+1}</th>
                <td>{item.Db}</td>
                <td><Modal data={item.Data}buttonLabel="Data"/></td>
                <td>{item.Atto}</td>
              </tr> 
              )
          }):alert('inserte una DB y/o Atto Existente')
        }
            
          
        </tbody>
      </Table>
      </div>
    );
  }
}
