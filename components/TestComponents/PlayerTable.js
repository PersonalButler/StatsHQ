import React, {Component} from 'react';
import {inject, observer} from 'mobx-react'
import Table from 'react-bootstrap/Table';
//import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
//import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class PlayerTable extends Component {
    constructor(props) { 
        super(props);
    }

    render(){
        let playerName = this.props.name;
        let player = this.props.store.StatsStore.getPlayerStats(playerName);
        let playerStatYears = player ? player.stats : []; 
        let image = player ? player.image : null;
        console.log(playerName, player, playerStatYears);

        return (
            <div>
                <h1>{playerName} <br></br></h1>
                {image ? <img src={image} alt="" /> : null}
                <br></br>
            
                <Table responsive="sm" >
                    <thead>
                        <tr>
                            <th>Season</th>
                            <th>Points per Game</th>
                            <th>Assists per Game</th>
                            <th>Rebounds per Game</th>
                            <th>Turnovers Per Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            playerStatYears.map((year, index) => (
                                <tr key={'stats-' + index + Math.random()}>
                                    <td>{year.season}</td>
                                    <td>{year.ppg}</td>
                                    <td>{year.apg}</td>
                                    <td>{year.rebpg}</td>
                                    <td>{year.turnpg}</td>
                                </tr>    
                            ))
                        }                
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default inject('store')(observer(PlayerTable));
