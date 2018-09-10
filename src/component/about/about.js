import React, { Component } from 'react';
import aboutUs from './images/about_us.jpg';
import license from './images/linces.jpg';
import Header from '../header/header';
import Footer from '../footer/footer';

export default class About extends Component {
    render() {
        return (
            <div className="container-flued">
            <Header />
            <div className="container">
                <div className="row">
                    <h3  ><strong> Apc International Recruiting Agency</strong></h3>
                    <img src={aboutUs} alt="license" className="img-responsive rounded" />
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <p>We Provide Honest Sincere, Hardworking Workforce As Well As Skilled Personnel & Professionals for your big Or Small Project.We feel pleasure to introduce ourselves as one of the most prestigiouis and
                                leading overseas employment promoters in Pakistan duly approved by the ministry of manpower government of Pakistan under
                                 <br />
                                <strong>license No. OP &amp;HRD/4265/LHR/2017 </strong> ahead in the job market with a team of professional proficient in supplying skilled, semiskilled, Unskilled, Qualified & professional labour force.
                                    APC INTERNATIONal is a fast growing recruitment company with wide experience in supply and management of manpower aborad, good reputation at home overseas.
                            </p>
                            <p>We believe in promote, professional services and always Endeavour to provide Healthy, Hardworking, Obedient, Disciplined and dutiful works.
                                We guarantee the quality and productivity of workers required by our valued employers and every care is taken to ensure that the best and right kind of workers is required.</p>
                            <h3><strong>license:</strong></h3>
                            <div className="col-sm-12">
                                <img src={license} alt="license" className="img-responsive rounded" />
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
