import React, { Component } from 'react';
import shahid from './images/shahidzul.jpg';
import Header from '../header/header';
import Footer from '../footer/footer';

export default class ChairmanMessage extends Component {
  render() {
    return (
      <div className="container-flued">
      <Header />
      <div className="container">
        <div className="row msg">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1 className="text-center">Chairman Message</h1>
              <div className="col-sm-4">
                <img src={shahid} className="img-responsive" alt="chairman" />

              </div>
              <div className="col-sm-8">
                <p>Pakistan workforce (skilled, semi skilled and unskilled) is second to none in the world.
                     Our technicians and workers have played major role in the completion of development
                     project in almost all Middle East Countries. in Europe, especially in England,
                     Pakistani manpower has made positive contribution for progress and prosperity.
                      Our pride and glory as an export house in Pakistan, belong to our valued clients for having
          such undying confidence on us.</p>
                <p>I have the pleasure to introduce my organization as a trusted manpower recruitment agent of Pakistan.
                     Our sincerity and dedicated services blended with highest standard of professionalism has
                     earned global recognition, trust and confidence. Our many staff have made us proud with
                     their sincere efforts and hard work. APC International Recruiting Promoters has its
                     reputation in placing Professionals, Technicians, Skilled and Semi Skilled workers.
                      The company began with one goal in mind that is to serve our esteemed clients with
          a level of care and expertise rarely found. </p>
                <p>Owing to our professional experience, our performance and firm commitments in terms of
                     quality services and time period, has been greatly acknowledged and admired by our clients.
                      Client satisfaction being the core objective of our organization, has contributed a lot
                      to our success for being one of the most reliable overseas employment promoters firms.
           </p>
                <p>
                  <strong>Shahid Zulfiqar </strong>
                  <br />Apc International Recuruiting Agency<br />
                  Call: 03016481002
</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}
