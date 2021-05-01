import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {

  render() {

     return (
      <>
     <Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
       <Modal.Header closeButton>
         <Modal.Title>{this.props.details.title}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
       <Card.Img variant="top" src={this.props.details.imageUrl} />
         </Modal.Body>
         <p>{this.props.details.description}</p>
       <Modal.Footer>
         <Button variant="secondary" onClick={this.props.handleClose}>
           Close
         </Button>
       </Modal.Footer>
     </Modal>    
   </>
   );
   
    
  }
}

export default SelectedBeast;