import React, { Component } from 'react';
import shahid from './images/shahid.jpg';
import { Link } from 'react-router-dom';


export default class Body extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <div className="row">
                <div className="col-sm-8 mission">
                        <h3>Our Mission</h3>
                        <div className="panel panel-default">
                            <div className="panel-body">

                                <p>Pakistanis have demonstrated a commendable ability in acquisition of sophisticated and semi technical skills. They have shown greeted enterprise by volunteering themselves to work on highly professional, technical and semi skilled jobs in a number of developed and developing countries of Europe, Middle East, North America, Asia and Africa in recent past years.
                  
              </p> 
              <p>  Pakistani workers have earned for themselves a good reputation with their elegant services in foreign countries. About a million Pakistanis are actively engaged as partners in progress of several Asian, African and European countries and have enhanced the image of Pakistan.</p><p> In Pakistan all kind of competent Manpower is available for their prestigious clients in all fields
                                    engaged in Construction of Power Houses, Dams, Roads, Oil Refineries, Buildings, Housing Complexes, Educational Institutions, Airports, Shipyards, Jetties, Dry Docks, Information Technology, Finance, Engineering Mechanical, Electrical, Civil, Instrument, Communication, Chemicals, Architecture, Designing, Office Establishments, Airlines, Fertilizers, Petroleum, Steel Mills, Hospitals, Hotels, Sales.
                  </p>
                  
<p>   All type of Technicians, Printing Presses, Manufacturing & Assembling Units staff, Heavy Equipment Operators, Heavy Equipment Mechanics, Drivers, Carpenters, Masons, Tile Fixers, Plasterer, Scaffolder, Labor, Porters, Gardner’s, Laundry Staff, or whatsoever any employer is required including Land reclamation etc.
                                We believe in promote, professional services and always Endeavour to provide Healthy, Hardworking, Obedient, Disciplined and dutiful works.
                                
 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h3>Chairman Message</h3>
                        <div className="thumbnail">
                            <img src={shahid} className="img-responsive img-rounded" alt="chairman photo" />
                                <div className="caption">
                                    <h3>Shahid Zulfiqar</h3>
                                    <p>Client satisfaction is among the top most priorities in our company. And here, in this region, we have been keeping the company on the top of the list for providing best traveling services and having highest client satisfaction rate since it's inception.</p>
                                    <p><Link to="/chairmanMessage" className="btn btn-primary" role="button">More</Link> <a href="mailto:shahidrana458@gmail.com" className="btn btn-default" role="button">Contact</a></p>
                                </div>
            </div>
                        </div>
                    </div>
                </div>
                {/* !-- container for contect --> */}
            </div>
        )
    }
}
