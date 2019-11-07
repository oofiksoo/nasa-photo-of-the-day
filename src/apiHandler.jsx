import React, {useState, useEffect} from "react";
import Apod from "./apod";
import axios from "axios"

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
        <div>
      <div className="container">
        <Apod title={api.title} url={api.url} date={api.date} explanation={api.explanation}/>
        <div className="controls">
        <button className="todaybtn" onClick ={() => setDate('')}>Today</button> 
        <button className="yesterdaybtn" onClick ={() => setDate('2019-05-11')}>Yesterday</button>
        <button className="twodaysbtn" onClick ={() => setDate('2019-04-11')}>2 Days Ago</button>   
        </div>              
       </div>
      </div>
    );
  }