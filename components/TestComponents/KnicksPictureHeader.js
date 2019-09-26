import React from 'react'
import './KnicksLogoStyle.css';
import KnicksLogo from'../knicksLogo.png';


function KnicksPictureHeader(){

    return (
        <div>
    <img src = {KnicksLogo}  className = "KnicksLogo" alt=""  />
    </div>
    );
}

export default KnicksPictureHeader