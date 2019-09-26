import React from 'react'
import './NBALogoStyle.css';
import NBALogo from'../NBALogo.png';



function NBALogoPicture(){

    return (
    <img src = {NBALogo} className = "NBALogo" alt=""  />
    
    );
}

export default NBALogoPicture