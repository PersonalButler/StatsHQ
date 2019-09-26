import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header/Header';
import Buttons from '../components/TestComponents/Buttons';
import SampleText from '../components/TestComponents/SampleText';
import PlayerCarousel from '../components/TestComponents/Carousel';
import TeamStats from '../components/TestComponents/TeamStats';
import Roster from '../components/TestComponents/Roster';
import PictureHeader from '../components/TestComponents/PictureHeader'
import NuggetsFacts from '../components/TestComponents/NuggetsFacts'
import  {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { inject, observer } from 'mobx-react';

class Home extends Component {
  render(){
    return (
      <div> 
        <Helmet bodyAttributes={{style: 'background-color : #b0c4de'}}/>
        <Header /> 
        <SampleText />
        <NuggetsFacts />
        <PictureHeader />
        <TeamStats teamName="Denver Nuggets" />
        <PlayerCarousel />
        <Roster />
        <Buttons />
           
      </div>
    )
  }
}

export default inject('store')(observer(Home));