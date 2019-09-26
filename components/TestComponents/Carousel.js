import React from 'react'
import { Carousel } from 'react-bootstrap';
import Jokic from '../jokic.jpg';
import Murray from '../murray.jpg';
import Harris from '../harris.jpg';
import Barton from '../barton.jpg';
import Millsap from '../millsap.jpg';
import PlayerTable from './PlayerTable';
import './PlayerCarousel.css';


function PlayerCarousel(){

  return(
    <div className = "Carousel">
    <Carousel>
      <Carousel.Item>
      <img src = {Jokic} alt=""  />
        <PlayerTable name="Nikola Jokic" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Murray} alt=""  />
        <PlayerTable name="Jamal Murray" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Harris} alt=""  />
        <PlayerTable name="Gary Harris" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Barton} alt=""  />
        <PlayerTable name="Will Barton" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Millsap} alt=""  />
        <PlayerTable name="Paul Millsap" />
      </Carousel.Item>
    </Carousel>
    </div>
  );   
}

export default PlayerCarousel