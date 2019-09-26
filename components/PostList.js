import React, {Component} from 'react';
//import { Provider } from "mobx-react";
//import { masterStore } from "./store/MasterStore";
import PostData from './data/gary-harris.json';

class PostList extends React.Component {

    state = {
        harrisStats: []
    }
    render() {
      return (
          <div>
              <h1>Hello There</h1>
              {PostData.map((postDetail, index) => {
                  this.state.harrisStats.push(postDetail.ppg);
                  
                  return <h1>{postDetail.ppg}</h1>

              })}
          </div>
      );
    }
  }
  
  export default PostList;