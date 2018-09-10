import React, { Component } from 'react';
import FooterRights from './belowFooterRights/footerRights';
import { Link } from 'react-router-dom';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container-flued btmbr">
                    <div className="container footerCustom">
                        <div className="row btmpad">
                            <div className="col-sm-4 ">
                                <div className="heading">
                                    <h3>What We Serve</h3>
                                </div>
                                <ul>
                                    <a href="#">
                                        <li>Visas</li>
                                    </a>
                                    <a href="#">
                                        <li>Air tickets</li>
                                    </a>
                                    <a href="#">
                                        <li>Passport</li>
                                    </a>
                                    <a href="#">
                                        <li>dubai visits</li>
                                    </a>
                                    <a href="#">
                                        <li>Hong Kong visit</li>
                                    </a>
                                    <a href="#">
                                        <li>Nepal visit</li>
                                    </a>
                                    <a href="#">
                                        <li>Malaysia visit</li>
                                    </a>
                                    <a href="#">
                                        <li>Pia tickets</li>
                                    </a>

                                </ul>
                            </div>

                            <div className="col-sm-4">
                                <div className="heading">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                <Link to="/">
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/contact">
                                        <li>Contact us</li>
                                    </Link>
                                    <Link to="/about">
                                        <li>About us</li>
                                    </Link>
                                    <Link to="/chairmanMessage">
                                        <li>Chairman contact</li>
                                    </Link>
                                    <Link to="/contact">
                                        <li>Our Staf</li>
                                    </Link>
                                    <Link to="/ourClints">
                                        <li>visa details</li>
                                    </Link>
                                    <Link to="/ourClints">
                                        <li>Our clients</li>
                                    </Link>
                                    <Link to="/services">
                                        <li>Services</li>
                                   </Link>
                                </ul>
                            </div>

                            <div className="col-sm-4">
                                <div className="heading">
                                    <h3>Social Contacts</h3>
                                </div>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/APC4265" target="_blank" className="social-icons">
                                            <i className="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></i>
                                        </a>Facebook Profile </li>
                                    <li>
                                        <a href="https://www.facebook.com/ranashahid.zulfiqar.1" target="_blank" className="social-icons">
                                            <i className="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></i>
                                        </a>Chairman Profile </li>
                                    <li>
                                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2Fapc_recruting&h=ATPBr0tTwRPNALAa_DWMk1f6X5r3zVbZPgusfcmSzu6Kv4pJ0rnYruGp1IRJ1b06rAaorSEa27ZDa7QPQTRsOi9LtQ4sFZ9pzF7L9THiB2eQ2QtsS2p3BWSEOnoIEI8ie0pwlh_01nzGdSg"
                                            target="_blank" className="social-icons">
                                            <i className="fa fa-twitter" data-toggle="tooltip" data-placement="bottom" title="Twitter"></i>
                                        </a>Twitter Profile </li>
                                    <li>
                                        <a href="#" className="social-icons">
                                            <i className="fa fa-google-plus-official " data-toggle="tooltip" data-placement="bottom" title="Google"></i>
                                        </a>google plus Profile </li>
                                    <li>
                                        <a href="#" className="social-icons">
                                            <i className="fa fa-instagram" data-toggle="tooltip" data-placement="bottom" title="Instagram"></i>
                                        </a>instagram Profile </li>
                                    <li>
                                        <Link to="/contact">Contacts</Link>
                                        <p>Call: 0556332526 / 055632121
                <br />Email: apc.international4265@gmail.com
                <br />Email: apc.international4265@yahoo.com</p>
                                    </li>
                                </ul>


                            </div>
                        </div>
                        {/* <!-- row for butto--> */}

                    </div>
                    {/* <!-- container for buttom--> */}
                </div>
                {/* <!-- container flued for buttom--> */}
                <FooterRights />
            </div>
        )
    }
}
