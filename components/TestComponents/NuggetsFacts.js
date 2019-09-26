import React, {Component} from 'react';
import {inject, observer} from 'mobx-react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import './FactsCard.css';


class NuggetsFacts extends Component {
    render(){

    return (


<Card bg = 'secondary'  style={{width: '40rem', height: '12rem'}} className = 'Card'>
  <Card.Body>
    <Card.Text>

       <div className = 'Facts' align= 'left'><h5><b> Year Founded: </b> 1967 </h5> </div> 
       <div className = 'Facts' align= 'left'><h5><b>Owner: </b>Ann Walton Kroenke  </h5> </div> 
       <div className = 'Facts' align= 'left'><h5><b>General Manager: </b> Arturas Karnisovas </h5> </div> 
       <div className = 'Facts' align= 'left'><h5><b>Head Coach: </b> Michael Malone  </h5> </div> 
       <div className = 'Facts' align= 'left'><h5><b>Current Stadium: </b> Pepsi Center  </h5> </div> 
      
    </Card.Text>
  </Card.Body>
</Card>
    )
    }
}
    export default inject('store')(observer(NuggetsFacts));
