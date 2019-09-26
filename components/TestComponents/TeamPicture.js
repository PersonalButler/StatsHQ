import React from 'react'
import './SampleTextStyle.css';
import NuggetsLogo from'../nuggetsLogo.png';
import NuggetsTeam from '../nuggetsTeam.jpg';
import './TeamPictureStyle.css';

function PictureHeader(){

    return (
    
        <div className="TeamPictureStyle"><img src = {NuggetsTeam} alt="" /></div>
    );
}

export default PictureHeader