import React, { Component } from 'react';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import {Carousel } from 'react-bootstrap';

export default class Slider extends Component {
  render() {
    return (
      <div className="container-flued">
        <Carousel>
          <Carousel.Item>
            <img className="img-responsive" alt="900x500" src={image1} />
            
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive" alt="900x500" src={image2} />
            
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive" alt="900x500" src={image3} />
            
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
