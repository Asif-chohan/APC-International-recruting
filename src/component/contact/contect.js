import React, { Component } from 'react';
import contactImg from './images/contact.jpg';
import Header from '../header/header';
import Footer from '../footer/footer';


export default class Contact extends Component {
	render() {
		return (
			<div className="container-flued ">
				<Header />
				<div>

					<img src={contactImg} className="img-responsive" alt="get in touch" />
				</div>
				{/* <!-- /.section-background --> */}

				<div className="container">
					<div className="row frm">
						<div className="col-sm-6">
							<h2 className="section-title">
								Send Message
							</h2>
							<div className="form">
								<form onSubmit={(e) => {
									e.preventDefault();
									var data = {
										name: this.refs.name.value,
										email: this.refs.email.value,
										cell: this.refs.cell.value,
										text: this.refs.text.value
									}
									console.log(data);
								}
								}
								>

									<div className="input-group">

										<input ref="name" className="form-control border-radius border-right" type="text" placeholder="Name" required />
										<span className="input-group-addon  border-radius custom-addon">
											<i className="fa fa-user "></i>
										</span>
									</div>
									<div className="input-group">
										<input ref="email" className="form-control border-radius border-right" name="email" type="email" placeholder="Email address" required />
										<span className="input-group-addon  border-radius custom-addon">
											<i className="fa fa-envelope "></i>
										</span>
									</div>
									<div className="input-group">
										<input ref="cell" className="form-control border-radius border-right" type="tel" placeholder="Phone number" />
										<span className="input-group-addon  border-radius custom-addon">
											<i className="fa fa-phone"></i>
										</span>
									</div>
									<div className="input-group">
										<textarea ref="text" className="form-control border-radius border-right" rows="8" placeholder="Write Message"></textarea>
										{/* <!-- <input type="text" name="text" rows="8" className="form-control border-radius border-right message" placeholder="Write Message"> --> */}
										<span className="input-group-addon border-radius custom-addon">
											<i className="fa fa-envelope"></i>
										</span>
									</div>
									<button type="submit" className="btn btn-default border-radius custom-button">SEND MESSAGE </button>
								</form>
							</div>
						</div>
						{/* <!-- /.col-sm-6 --> */}
						<div className="col-sm-6">
							<h2 className="section-title">
								Find Us Via Google Map
							</h2>
							<div className="mapouter"><div className="gmap_canvas"><iframe width="550" height="330" id="gmap_canvas" src="https://maps.google.com/maps?q=Madina%20Chowk%2C%20Gujranwala%20Road%2C%20Alipur%20Chatha%2C%20Punjab%2C%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div></div>
						</div>
						{/* <!-- /.col-sm-6 --> */}
					</div>
				</div>















				<section className="contacts section-wrapper info">
					<div className="container">
						<div className="row rw">
							<div className="col-sm-4">
								<div className="contact">
									<div className="contact-icon">
										<i className="fa fa-home  "></i>
									</div>
									<div className="contact-name">
										Address
						</div>
									<div className="contact-detail">
										QadirAbad Road,Opposite Sahbzada Autos, Alipur Chatha
										Distt Gujranwalla,Teh Wazairabad,punjab pakistan.
						</div>
								</div>
								{/* <!-- /.contact --> */}
							</div>
							{/* <!-- /.col-sm-4 --> */}
							<div className="col-sm-4">
								<div className="contact">
									<div className="contact-icon">
										<i className="fa fa-phone "></i>
									</div>
									<div className="contact-name">
										Phone
						</div>
									<div className="contact-detail">
										Local:  0556332526 / 055632121 <br />
										Mobile: 03016481002
						</div>
								</div>
								{/* <!-- /.contact --> */}
							</div>
							{/* <!-- /.col-sm-4 --> */}
							<div className="col-sm-4">
								<div className="contact">
									<div className="contact-icon">
										<i className="fa fa-envelope "></i>
									</div>
									<div className="contact-name">
										Email Address
						</div>
									<div className="contact-detail">
										apc.international4265@gmail.com<br />
										<a href="#">apc.international4265@yahoo.com</a>
									</div>
								</div>
								{/* <!-- /.contact --> */}
							</div>
							{/* <!-- /.col-sm-4 --> */}
						</div>
						{/* <!-- /.row --> */}
					</div>
					{/* <!-- /.container --> */}
				</section>






















				<div className="container">
					<div className="row text-center news">
						<div className="subscribe section-wrapper">
							<a className="brand-logo" href="index.html" title="HOME"><i className="fa fa-plane"></i> Apc <span>International</span></a>
							<p className="subscribe-now">
								Subscribe to our Newsletter
							</p>


							<div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">

								<form onSubmit={
									(e) => {
										e.preventDefault();
										var data = {
											email: this.refs.subEmail.value
										}
										console.log(data);

									}
								}>
									<div className="input-group">
										<input ref="subEmail" type="email" className="form-control border-radius" placeholder="Email address" />
										<span className="input-group-btn">
											<button className="btn btn-default border-radius custom-sub-btn" type="submit">DONE</button>
										</span>
									</div>
								</form>

								{/* <!-- /input-group --> */}
							</div>
						</div>
					</div>

				</div>
				<Footer />
			</div>
		)
	}
}
