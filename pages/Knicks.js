import React, {Component} from 'react';
import Helmet from 'react-helmet';

import KnicksHeader from '../components/Header/KnicksHeader';
import Buttons from '../components/TestComponents/Buttons';
import KnicksSampleText from '../components/TestComponents/KnicksSampleText';
import PlayerCarousel from '../components/TestComponents/KnicksCarousel';
import TeamStats from '../components/TestComponents/TeamStats';
import Roster from '../components/TestComponents/Roster';
import KnicksPictureHeader from '../components/TestComponents/KnicksPictureHeader'
import  {BrowserRouter as Router, Route, Link} from "react-router-dom";
import KnicksFacts from '../components/TestComponents/KnicksFacts'
import { inject, observer } from 'mobx-react';

class Knicks extends Component {
  render(){
    return (
      <div> 
        <Helmet bodyAttributes={{style: 'background-color : #87ceff'}}/>
        <KnicksHeader />
        <KnicksSampleText />
        <KnicksFacts/>
        <KnicksPictureHeader />
        <TeamStats teamName="New York Knicks" />
        <PlayerCarousel />
        <Roster />
        <Buttons />
           
      </div>
    )
  }
}

export default inject('store')(observer(Knicks));