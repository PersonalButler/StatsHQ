import React, {Component} from 'react';
import Helmet from 'react-helmet';

import NetsHeader from '../components/Header/NetsHeader';
import Buttons from '../components/TestComponents/Buttons';
import NetsSampleText from '../components/TestComponents/NetsSampleText';
import PlayerCarousel from '../components/TestComponents/NetsCarousel';
import TeamStats from '../components/TestComponents/TeamStats';
import Roster from '../components/TestComponents/Roster';
import NetsPictureHeader from '../components/TestComponents/NetsPictureHeader'
import  {BrowserRouter as Router, Route, Link} from "react-router-dom";
import NetsFacts from '../components/TestComponents/NetsFacts'
import { inject, observer } from 'mobx-react';

class Nets extends Component {
  render(){
    return (
      <div> 
        <Helmet bodyAttributes={{style: 'background-color : #a9a9a9'}}/>
        <NetsHeader />
        <NetsSampleText />
        <NetsFacts />
        <NetsPictureHeader />
        <TeamStats teamName="Brooklyn Nets" />
        <PlayerCarousel />
        <Roster />
        <Buttons />
           
      </div>
    )
  }
}

export default inject('store')(observer(Nets));