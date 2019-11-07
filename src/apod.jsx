import React, {useState} from "react";
import { Jumbotron, Button, Collapse, Card, CardBody } from 'reactstrap';
const Apod = props => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="apod">
        <Jumbotron>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.date}</p>
        <img className="apod-img" alt="NASA" src={props.url}/>
        <hr className="my-2" />
        <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Learn More</Button>
        <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {props.explanation}
          </CardBody>
        </Card>
        </Collapse>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Apod;
