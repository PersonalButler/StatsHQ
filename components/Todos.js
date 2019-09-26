import React, {Component} from 'react';
//import './App.css';
import { Provider } from "mobx-react";
//import { masterStore } from "./store/MasterStore";
//import Home from './pages/Home'
//import GaryHarris from './components/GaryHarris'


class Todos extends Component {
  render() {
      console.log(this.props.todos)
    return this.props.todos.map((todo) => (

            <h3>{todos.title}</h3>
    ));
  }
}

export default Todos;

