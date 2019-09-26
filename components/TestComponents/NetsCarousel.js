import React from 'react'
import { Carousel } from 'react-bootstrap';
import Russell from '../russell.jpg';
import Harris from '../harrisJoe.jpg';
import Allen from '../Allen.jpg';
import Carroll from '../carroll.jpg';
import Napier from '../napier.jpg';
import PlayerTable from './PlayerTable';
import './PlayerCarousel.css';


function PlayerCarousel(){

  return(
    <Carousel className = "Carousel">
      <Carousel.Item>
      <img src = {Russell} alt=""  />
        <PlayerTable name="Diangelo Russell" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Napier} alt=""  />
        <PlayerTable name="Shabaz Napier" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Harris} alt=""  />
        <PlayerTable name="Joe Harris" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Carroll} alt=""  />
        <PlayerTable name="Demere Carroll" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Allen} alt=""  />
        <PlayerTable name="Jarett Allen" />
      </Carousel.Item>
    </Carousel>
  );   
}

export default PlayerCarousel