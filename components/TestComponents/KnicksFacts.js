import React, {Component} from 'react';
import {inject, observer} from 'mobx-react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import './FactsCard.css';


class KnicksFacts extends Component {
    render(){

    return (


<Card bg = 'secondary'  style={{width: '40rem', height: '12rem'}} className = 'Card'>
  <Card.Body>
    <Card.Text>

       <div className = 'Facts' align= 'left'><h5><b> Year Founded: </b> 1946 </h5> </div> 
       <div className = 'Facts' align= 'left'><h5><b>Owner: </b>James Dolan  </h5> </div> 
       <div className = 'Facts' align= 'left'><h5><b>General Manager: </b> Scott Perry </h5> </div> 
       <div className = 'Facts' align= 'left'><h5><b>Head Coach: </b> David Fizdale </h5> </div> 
       <div className = 'Facts' align= 'left'><h5><b>Current Stadium: </b> Madison Sq. Garden </h5> </div> 
      
    </Card.Text>
  </Card.Body>
</Card>
    )
    }
}
    export default inject('store')(observer(KnicksFacts));
