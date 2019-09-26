import React from 'react';
import { observable, action} from "mobx";
import { computed, decorate } from "mobx";
import axios from 'axios';
//import HarrisData from '../components/data/gary-harris.json';
//import BartonData from '../components/data/will-barton.json';
//import JokicData from '../components/data/nikola-jokic.json';
//import MurrayData from '../components/data/jamal-murray.json';
//import MillsapData from '../components/data/paul-millsap.json';

import Players from '../components/data/players.json';
import Teams from '../components/data/teams.json';

class StatsStore extends React.Component{

  getPlayerStats(playerName) {
    let PlayersArray = Players;
    let player = PlayersArray.filter(i => i.name === playerName);
    if (player.length >= 1) {
      return player[0];
    } else {
      return null;
    }
  }

  getAllPlayerStats() {
    return Players;
  }

  getTeamStats(teamName) {
    let TeamsArray = Teams;
    let team = TeamsArray.filter(i => i.name === teamName);
    if (team.length >= 1) {
      return team[0];
    } else {
      return null;
    }
  }

  getAllTeamStats() {
    return Teams;
  }

  apiResponse = observable({});
  modalState = observable({show: false});

  close = () => {
    this.modalState.show = false;
  }

  open = () => {
    this.modalState.show = true;
  }

  callApi = async () => {
    let url = "https://jsonplaceholder.typicode.com/todos/1";
    let apiResponse = {};
    await axios.get(url)
      .then(function (response) {
        apiResponse = response;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    this.apiResponse = await apiResponse;
  }  
}

decorate(StatsStore, {
  close: action,
  open: action 
} )


export default (StatsStore = new StatsStore());