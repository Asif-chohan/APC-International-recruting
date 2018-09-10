import React, { Component } from 'react'

export default class FooterRights extends Component {
    render() {
        return (
            <div>
                <div className="container-flued copy">
                    <div className="container">
                        <div className="row text-center">
                            <a href="#">
                                <span className="brd">
                                    Terms &amp; Conditions</span>
                            </a>
                            <a href="#">
                                <span className="brd">Cookie Policy</span>
                            </a>
                            <a href="#">
                                <span>Privacy Policy </span>
                            </a>
                            <br />
                            <div>
                            <p>All Right Reserved copyright 2018&copy;</p>
                        </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
