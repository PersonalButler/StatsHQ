import React, {Component} from 'react';
import {inject, observer} from 'mobx-react'
import './HomePageHeaderStyle.css';



class HomePageHeader extends Component {
    
    render(){
    
    return (<div className="HomePageHeader"><h1> <b>NBA Team Stats Page
    </b> </h1> <h5 className = 'HeaderDescription'> Showing all recent stats of NBA teams, from team total stats, to specific player stats.
    Select a team from the top menu to view. </h5> </div>)
    }
}
export default inject('store')(observer(HomePageHeader));