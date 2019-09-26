import React, {Component} from 'react'
import {inject, observer} from 'mobx-react';
import { Button, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './Buttons.css';


class Buttons extends Component {

  render(){
    let store = this.props.store.StatsStore;
    let players = store.getAllPlayerStats();
    return (
     
       // <Button variant="primary" onClick={()=>store.callApi()}>Call Api</Button>
         <div>
        <Button variant="primary" onClick={()=>store.open()}>Player Career Stats</Button>
  
        <Modal show={store.modalState.show} onHide={() =>store.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Nuggets Players Career Stats</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            <div className="modal-header"><b><h5> As of 2018-2019 Season</h5></b></div>
              <div>
                <Table striped bordered hover responsive="xl">
                  <thead>
                    <tr>
                      <th>Player (years in NBA) </th>
                      <th>Points per Game</th>
                      <th>Assists per Game</th>
                      <th>Rebounds per Game</th>
                      <th>Turnovers Per Game</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    players.map((player, index) => (
                        <tr key={'player-' + index + Math.random()}>
                          <td key={'yearspg-' + index}>{player.name + ' (' + player.stats.length + ')'}</td>
                          <td key={'ppg-' + index}>{player.careerStats[0]}</td>
                          <td key={'apg-' + index}>{player.careerStats[1]}</td>
                          <td key={'rpg-' + index}>{player.careerStats[2]}</td>
                          <td key={'tpg-' + index}>{player.careerStats[3]}</td>
                        </tr>    
                        ))
                    }
                    </tbody>
                  </Table>    
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() =>store.close()}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
      )
    }
}

export default inject('store')(observer(Buttons));
