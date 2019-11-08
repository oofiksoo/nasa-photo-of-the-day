import React, {useState} from "react";
import { Jumbotron, Button, Collapse, Card, CardBody} from 'reactstrap';
const Mrp = props => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="Mrp">
    <Jumbotron>
        <h1 className="display-3">{props.date}</h1>
        <p className="lead">{props.title}</p>
        <hr className="my-2"/>
        <p className="status">{props.status}</p>
        <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Learn More</Button>
        <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {props.benefits}
          </CardBody>
        </Card>
        </Collapse>
        </div>
      </Jumbotron>
   </div>
  );
};

export default Mrp;
