import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

import Slider from '../slider/slider';
import Mission from '../homeBody/body';



export default class Parent extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Slider />
        <Mission />
        <Footer />
      </div>
    )
  }
}
