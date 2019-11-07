import React, {useState, useEffect} from "react";
import  Mrp from "./Mrp.jsx";
import axios from "axios"

export default function Edapi() {
    const [edapi, setEdApi] = useState([])
    const [Earthdate, setEarthDate] = useState("2019-09-25")
  
    useEffect(() => {
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${Earthdate}&api_key=dR5Qr9DwHL4cbG1kCUzI5LxCAaC7vgc8SR291XUJ `)
      .then(response => {
        console.log(response)
        setEdApi(response.data.photos)
      })
      .catch( error => {
        console.log(error)
      })
    },[Earthdate])
    return (
      <div>
      <div className="container">
         {edapi.map((ed, index) => {return <Mrp key={index} title={edapi.earth_date} url={edapi.img_src} date={edapi.earth_date} full_name={edapi.earth_date}/>})}
    </div>
    <div className="controls">
    <button className="todaybtn" onClick ={() => setEarthDate('2019-07-11')}>Today</button> 
    <button className="yesterdaybtn" onClick ={() => setEarthDate('2019-06-11')}>Yesterday</button>
    <button className="twodaysbtn" onClick ={() => setEarthDate('2019-05-11')}>2 Days Ago</button>   
    </div>
    </div> 
    );
}            
   