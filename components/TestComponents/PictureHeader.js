import React from 'react'
import NuggetsLogo from'../nuggetsLogo.png';
import './PictureHeaderStyles.css';
import NuggetsTeam from '../nuggetsTeam.jpg';

function PictureHeader(){

    return (
    <img src = {NuggetsLogo}  className = "nuggetsLogo" alt=""  />
    
    );
}

export default PictureHeader