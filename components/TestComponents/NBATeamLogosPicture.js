import React from 'react'
import './NBATeamLogosStyle.css';
import NBATeamLogos from'../NBATeamLogos.jpg';



function NBATeamLogosPicture(){

    return (
        <div className = "NBATeamLogos">
    <img src = {NBATeamLogos}   alt=""  />
    </div>
    );
}

export default NBATeamLogosPicture