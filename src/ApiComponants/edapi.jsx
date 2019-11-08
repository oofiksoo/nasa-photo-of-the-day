import React, {useState, useEffect} from "react";
import  Mrp from "./Mrp";
import axios from "axios"
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Edapi() {
    const [edapi, setEdApi] = useState([])
    const [Var, setVar] = useState("17792")
    const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  
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
        <h1>NASA Techport:</h1>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select Project
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick ={() => setVar('94101')}>94101</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick ={() => setVar('33419')}>33419</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick ={() => setVar('4209')}>4209</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick ={() => setVar('7835')}>7835</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick ={() => setVar('13590')}>13590</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick ={() => setVar('10122')}>10122</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
      <Mrp title={edapi.title} benefits={edapi.benefits} description={edapi.description} date={edapi.endDate} status={edapi.status}/>              
       </div>
 
    );
}            
   