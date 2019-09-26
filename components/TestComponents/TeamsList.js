import React from 'react';
import Table from 'react-bootstrap/Table';
import './TeamsListStyle.css';

function TeamsList(){

    return (
        <div className = 'TeamsList'>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>List of All NBA Teams: </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Celtics</td>
    </tr>
    <tr>
      <td>Spurs</td>
    </tr>
    <tr>
      <td>Hawks</td>
    </tr>
    <tr>
      <td>Pelicans</td>
    </tr>
    <tr>
      <td>Sixers</td>
    </tr>
    <tr>
      <td>Bucks</td>
    </tr>
    <tr>
      <td>Hornets</td>
    </tr>
    <tr>
      <td>Wizards</td>
    </tr>
    <tr>
      <td>Thunder</td>
    </tr>
    <tr>
      <td>Lakers</td>
    </tr>
    <tr>
      <td>Bulls</td>
    </tr>
    <tr>
      <td>Timberwolves</td>
    </tr>
    <tr>
      <td>Pistons</td>
    </tr>
    <tr>
      <td>Raptors</td>
    </tr>
    <tr>
      <td>Heat</td>
    </tr>
  </tbody>
</Table>
</div>
    );
}

export default TeamsList