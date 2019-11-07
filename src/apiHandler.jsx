import React, {useState, useEffect} from "react";
import Apod from "./apod";
import axios from "axios"
import { Button, ButtonGroup } from 'reactstrap';

export default function ApiHandler() {
    const [api, setApi] = useState([])
    const [date, setDate] = useState("2019-09-25")
  
    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=dR5Qr9DwHL4cbG1kCUzI5LxCAaC7vgc8SR291XUJ&date=${date}`)
      .then(response => {
        console.log(response)
        setApi(response.data)
      })
      .catch( error => {
        console.log(error)
      })
    },[date])
    return (
      <div className="container">
       <ButtonGroup>
      <Button onClick ={() => setDate('2019-06-11')}>Yesterday</Button>
      <Button onClick ={() => setDate('')}>Today</Button>
      <Button onClick ={() => setDate('2019-05-11')}>2 Days Ago</Button>
      </ButtonGroup>
       <Apod title={api.title} url={api.url} date={api.date} explanation={api.explanation}/>              
       </div>
    );
  }