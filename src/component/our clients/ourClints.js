import React, { Component } from 'react';
import commingSoon from './images/Coming-Soon.jpg';
import Header from '../header/header';
import Footer from '../footer/footer';


export default class OurClints extends Component {
  render() {
    return (
      <div className="container-flued">
        <Header />
        <div className="container">
          <div className="row coming">
            <img src={commingSoon} className="img-responsive" alt="coming soon" />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
