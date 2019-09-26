import React, {Component} from 'react'
import Table from 'react-bootstrap/Table';
import {inject, observer} from 'mobx-react';
import './SeasonTeamStatsStyle.css';

function CurrentSeasonTeamStats(){


return(

<div className = "SeasonTeamStats">
<Table responsive="sm" className = "TeamStatsTable"  >
<thead>
  <tr>
    <th>Team</th>
    <th>Wins</th>
    <th>Losses</th>
  </tr>
</thead>
<tbody>
    <tr>
      <td>Nuggets</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Nets</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Knicks</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Wizards</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Magic</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Cavaliers</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Trailblazers</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Raptors</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Thunder</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Celtics</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Lakers</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Heat</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Bucks</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Timberwolves</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Rockets</td>
      <td>0</td>
      <td>0</td>
    </tr>
    </tbody>
</Table>
</div>

)
}

export default inject('store')(observer(CurrentSeasonTeamStats));