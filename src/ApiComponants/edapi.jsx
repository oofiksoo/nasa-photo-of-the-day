import React, {useState, useEffect} from "react";
import  Mrp from "./Mrp.jsx";
import axios from "axios"
import { Button, ButtonGroup } from 'reactstrap';
export default function Edapi() {
    const [edapi, setEdApi] = useState([])
    const [Var, setVar] = useState("17792")
  
    useEffect(() => {
      axios.get(`https://api.nasa.gov/techport/api/projects/${Var}?api_key=dR5Qr9DwHL4cbG1kCUzI5LxCAaC7vgc8SR291XUJ`)
      .then(response => {
        setEdApi(response.data.project)
        console.log(response)
        })
      .catch( error => {
        console.log(error)
      })
    },[Var])
    return (
      <div className="container">
      <ButtonGroup>
      <Button onClick ={() => setVar('94101')}>17792</Button>
      <Button onClick ={() => setVar('33419')}>18684</Button>
      <Button onClick ={() => setVar('4209')}>16871</Button>
      </ButtonGroup>
      <Mrp title={edapi.title} benefits={edapi.description} date={edapi.endDate} status={edapi.status}/>              
       </div>
 
    );
}            
   