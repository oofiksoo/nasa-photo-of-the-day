import React from "react";
import "./App.css";
import ApiHandler from "./ApiComponants/apiHandler";
import styled from "styled-components";
import Edapi from "./ApiComponants/edapi";

function App() {
    const AppCard = styled.div `
    color: black;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:2%;
    border:1px dashed skyblue;
    border-radius:20px;
  `;
    return ( < div className = "App" >
        <
        h1 > NASA API 's:</h1> <
        div className = "App-dash" >
        <
        AppCard >
        <
        ApiHandler / >
        <
        /AppCard>  <
        AppCard >
        <
        Edapi / >
        <
        /AppCard>  < /
        div > <
        /div>
    );
}
export default App;