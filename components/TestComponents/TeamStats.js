import React, {Component} from 'react'
import Table from 'react-bootstrap/Table';
import {inject, observer} from 'mobx-react';
import './TeamStatsStyle.css'
//import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
//import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class TeamStats extends Component {
  constructor(props) { 
      super(props);
  }

  render(){
    let teamName = this.props.teamName;
    let team = this.props.store.StatsStore.getTeamStats(teamName);
    let teamStatYears = team ? team.teamStats : []; 


    return (

      
        <Table bordered responsive="sm" className="team-stats-table">
          <thead>
            <tr>
              <th>Season</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Average Points Scored</th>
              <th>Average Points Conceded</th>
              <th>Average Offensive Rebounds</th>
              <th>Average Defensive Rebounds</th>
              <th>Average Assists</th>
              <th>Average Fouls Given</th>
            </tr>
          </thead>
          <tbody>
              {
                  teamStatYears.map((year, index) => (
                      <tr key={'team-stats-' + index + Math.random()}>
                          <td>{year.year}</td>
                          <th>{year.wins}</th>
                          <th>{year.losses}</th>
                          <th>{year.avgPtsScored}</th>
                          <th>{year.avgPointsConceded}</th>
                          <th>{year.avgOffRebounds}</th>
                          <th>{year.avgDefRebounds}</th>
                          <th>{year.avgAssists}</th>
                          <th>{year.avgFoulsGiven}</th>
                      </tr>    
                  ))
              }                
          </tbody>
        </Table>
    );
  }
}

export default inject('store')(observer(TeamStats));