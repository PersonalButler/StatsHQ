import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Header from '/components/Header/Header';
import Buttons from '/components/TestComponents/Buttons';
import SampleText from '/components/TestComponents/SampleText';
import PlayerCarousel from '/components/TestComponents/Carousel';
import TeamStats from '/components/TestComponents/TeamStats';
import Roster from '/components/TestComponents/Roster';
import NBALogoPicture from '/components/TestComponents/NBALogoPicture'
import HomePageHeader from '/components/TestComponents/HomePageHeader'
import TeamsList from '/components/TestComponents/TeamsList'
import NBATeamLogosPicture from '/components/TestComponents/NBATeamLogosPicture'
import CurrentSeasonTeamStats from '/components/TestComponents/CurrentSeasonTeamStats'
import  {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { inject, observer } from 'mobx-react';

class Index extends Component {
  render(){
    return (
      <div> 
        
        <Helmet bodyAttributes={{style: 'background-color : #add8e8'}}/>
        <NBALogoPicture /> 
        <CurrentSeasonTeamStats/> 
        <HomePageHeader/>
        <TeamsList/>
        <NBATeamLogosPicture/>
        
      </div>
    )
  }
}

export default inject('store')(observer(Base));
