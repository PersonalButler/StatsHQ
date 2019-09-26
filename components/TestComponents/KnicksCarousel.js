import React from 'react'
import { Carousel } from 'react-bootstrap';
import Robinson from '../robinson.jpg';
import Ntiklina from '../ntiklina.jpg';
import Mudiay from '../mudiay.jpg';
import Smith from '../smithJr.jpg';
import Knox from '../knox.jpg';
import PlayerTable from './PlayerTable';
import './PlayerCarousel.css';


function PlayerCarousel(){

  return(
    <Carousel className = "Carousel">
      <Carousel.Item>
      <img src = {Robinson} alt=""  />
        <PlayerTable name="Mitchell Robinson" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Ntiklina} alt=""  />
        <PlayerTable name="Frank Ntiklina" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Mudiay} alt=""  />
        <PlayerTable name="Emanuel Mudiay" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Smith} alt=""  />
        <PlayerTable name="Dennis Smith Jr." />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {Knox} alt=""  />
        <PlayerTable name="Kevin Knox" />
      </Carousel.Item>
    </Carousel>
  );   
}

export default PlayerCarousel