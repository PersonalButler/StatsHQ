import React, {Component} from 'react';
import App from '../App.js';
//import { Provider } from "mobx-react";
//import { masterStore } from "./store/MasterStore";

class GaryHarris extends React.Component {

    state = {
      
    }
  
    render() {
    console.log(this.state.garyHarris);
      return (     
          <div>
            <App garyHarris = {this.state.garyHarris} />
          </div>
      );
    }
  }
  
  export default GaryHarris;
  