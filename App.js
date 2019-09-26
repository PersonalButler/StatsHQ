import React from 'react';
import './App.css';
import { Provider } from "mobx-react";
import { masterStore } from "./store/MasterStore";
import Table from 'react-bootstrap/Table';
import KnicksLogo from'./components/knicksLogo.png';
import NetsLogo from'./components/NetsLogo.gif';
import NuggetsLogo from'./components/nuggetsLogo.png';
import HomePic from './components/homeIcon.png'




import  {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './pages/Home'
import Base from './pages/Base'
import Nets from './pages/Nets'
import Knicks from './pages/Knicks';



class App extends React.Component {
  render() {
    return (
      <Provider store={masterStore}>
        <Router>
        <div className="App">

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to = "/" className="navbar-brand">Stats HQ</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto logo-links">
                <li class="nav-item">
                  <Link to="/nuggets/" class="nav-link"><img src={NuggetsLogo} />Nuggets</Link>
                </li>
                <li class="nav-item">                  
                  <Link to="/nets/" class="nav-link"><img src={NetsLogo} />Nets</Link>
                </li>
                <li class="nav-item">                  
                  <Link to="/knicks/" class="nav-link"><img src={KnicksLogo} />Knicks</Link>
                </li>
              </ul>
            </div>
          </nav>

{/*}
          <ul className="header-table">
            <li><Link to = "/"> <img src = {HomePic}  className = "HomeIcon" alt=""  /> <h2 className = 'tableHomeFont'>Home</h2></Link></li>
            <li><Link to = "/nuggets/"> <img src = {NuggetsLogo}  className = "NuggetsLogoMini" alt=""  /> <h2 className = 'tableTeamsFont'>Nuggets </h2></Link></li>
            <li><Link to = "/nets/"> <img src = {NetsLogo}  className = "NetsLogoMini" alt=""  /> <h2 className = 'tableTeamsFont'> Nets </h2></Link></li>
            <li><Link to = "/knicks/"> <img src = {KnicksLogo}  className = "KnicksLogoMini" alt=""  />  <h2 className = 'tableTeamsFont'>Knicks </h2></Link> </li>
          </ul>
    */}
        <Route path = "/" exact strict render = {
          ()=> {
            return ( <Base/> );
          }
        } />
          <Route path = "/nuggets/" exact strict render = {
          ()=> {
            return ( <Home/> );
          }
        } />
        <Route path = "/nets/" exact strict render = {
          ()=> {
            return ( <Nets/> );
          }
        } />
          <Route path = "/knicks/" exact strict render = {
          ()=> {
            return ( <Knicks/> );
          }
        } />
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
