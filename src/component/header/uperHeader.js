import React, { Component } from 'react'

export default class UperHeader extends Component {
    render() {
        return (
            <div className="container-flued topbar">
        <div className="container">
          <div className="row">

            <div className="col-sm-6 ">
              <a href="https://www.facebook.com/APC4265" target="_blank" className="social-icons">
                <i className="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></i>
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2Fapc_recruting&h=ATPBr0tTwRPNALAa_DWMk1f6X5r3zVbZPgusfcmSzu6Kv4pJ0rnYruGp1IRJ1b06rAaorSEa27ZDa7QPQTRsOi9LtQ4sFZ9pzF7L9THiB2eQ2QtsS2p3BWSEOnoIEI8ie0pwlh_01nzGdSg"
                target="_blank" className="social-icons">
                <i className="fa fa-twitter" data-toggle="tooltip" data-placement="bottom" title="Twitter"></i>
              </a>
              <a href="#" className="social-icons">
                <i className="fa fa-google-plus-official " data-toggle="tooltip" data-placement="bottom" title="google plus"></i>
              </a>
              <a href="#" className="social-icons">
                <i className="fa fa-instagram" data-toggle="tooltip" data-placement="bottom" title="instagram"></i>
              </a>
            </div>
            <div className="col-sm-6 details text-right contact-info">
              <span className="margin">
                <a href="mailto:contact@apcrecruting.com">
                  <span className="glyphicon glyphicon-envelope social-icons"></span>
                </a>
                <span>
                  <b>contact@apcrecruting.com </b>
                </span>
              </span>
              <span className="blk">
                <span className="glyphicon glyphicon-earphone social-icons "></span>
                <span>
                  <b>+923016481002</b>
                </span>
                </span>
          </div>
        </div>
            </div>
          </div>
        )
    }
}
