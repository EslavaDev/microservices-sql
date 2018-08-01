import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        setInterval(async () => {
            let response = await fetch('http://192.168.0.9:8080/api/support');
            let json = await response.json()
            this.setState({data:json.response})
        },5000)
    }
  render() {
      console.log(this.state.data);
      let item = this.state.data.map((data,index) =>{
          return(
            <tr key={data._id}>
            <th scope="row">{index+1}</th>
            <td>{data.Db}</td>
            <td>{data.Data}</td>
            <td>{data.Atto}</td>
          </tr> 
          )
      })
    return (
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
    );
  }
}
