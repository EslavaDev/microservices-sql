import React from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }


  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
  
    let item = JSON.parse(this.props.data);

      /**/
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Data TratamientoAsistencial</ModalHeader>
          <ModalBody>
          <Table responsive hover>
          <thead>
            <tr>
              <th>id</th>
              <th>TObj</th>
              <th>Atto</th>
              <th>idNodoP</th>
              <th>idNodoR2</th>
              <th>idNodoR3</th>
              <th>valor</th>
              <th>uncoSede</th>
              <th>uncoUsMf</th>
              <th>timeStamp</th>
              <th>codigoPB</th>
            </tr>
          </thead>
          <tbody>
          {
            
            item.map((d,i) =>{
                return(
                  <tr key={i}>
                  <th scope="row">{d.id}</th>
                  <td>{d.tipoObjeto}</td>
                  <td>{d.idTratamientoAsistencial}</td>
                  <td>{d.idNodoPrincipal}</td>
                  <td>{d.idNodoRelacionado2}</td>
                  <td>{d.idNodoRelacionado3}</td>
                  <td>{d.valor}</td>
                  <td>{d.uncoSede}</td>
                  <td>{d.uncoUsuarioModificacion}</td>
                  <td>{d.timeStamp}</td>
                  <td>{d.codigoPreguntaBase}</td>
      
                </tr> 
                )
            })}
          </tbody>
        </Table>
          </ModalBody>
           {/*<ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
           </ModalFooter>*/} 
        </Modal>
      </div>
    );
  }
}

export default ModalExample;