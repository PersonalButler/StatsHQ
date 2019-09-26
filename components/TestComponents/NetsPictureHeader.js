import React from 'react'
import './NetsLogoStyle.css';
import NetsLogo from'../NetsLogo.gif';


function NetsPictureHeader(){

    return (
        <div>
    <img src = {NetsLogo}  className = "NetsLogo" alt=""  />
    </div>
    );
}

export default NetsPictureHeader