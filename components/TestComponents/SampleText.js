import React, {Component} from 'react';
import {inject, observer} from 'mobx-react'
import Table from 'react-bootstrap/Table';
import './SampleTextStyle.css';


class SampleText extends Component {
    render(){

    return (<Table> <thead><tr><td><h1><div className="SampleTextStyle"> <b>Denver Nuggets Team Stats
    </b> <br></br> </div></h1>  </td></tr></thead> </Table>)
    }
}
export default inject('store')(observer(SampleText));
