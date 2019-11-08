import React, {useState} from "react";
import { Button, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
const Mrp = props => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
const [modal, setModal] = useState(false);
const togglemd = () => setModal(!modal);

  return (
    <div className="Mrp">
      <Card>
      <CardBody>
      <CardTitle><h1>{props.title}</h1></CardTitle>
        <CardSubtitle>Project End Date: {props.date}</CardSubtitle>
        <hr className="my-2"/>
        <CardText>Project Status: {props.status}</CardText>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Learn More</Button>
        <Collapse isOpen={isOpen}>
        <hr className="my-2"/>
          {props.description}
          <hr className="my-2"/>
          <div>
          <Button color="primary" onClick={togglemd}>Benefits</Button>
            <Modal isOpen={modal} toggle={togglemd}>
            <ModalHeader toggle={togglemd}>Benefits:</ModalHeader>
            <ModalBody>
              <p>{props.benefits}</p>
            </ModalBody>
            <ModalFooter>
          < Button color="secondary" onClick={togglemd}>Close</Button>
        </ModalFooter>
      </Modal>
      </div>        
          </Collapse>
          </CardBody>
        </Card>
        </div>
  );
};

export default Mrp;
