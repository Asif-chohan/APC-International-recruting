import React, { Component } from 'react';
import './App.css';
import './css/css/bootstrap.min.css';
import './css/contact.css';
// import './ionicons.min.css';
import './css/styles.css';
// import './css/fonts/flexslider-icon.eot';
// import './css/fonts/flexslider-icon.svg';
// import './css/fonts/flexslider-icon.ttf';
// import './css/fonts/flexslider-icon.woff';
import Parent from './component/parent/parent';
import About from './component/about/about';
import ChairmanMessage from './component/Chairman Message/chairmanMessage';
import Services from './component/services/services';
import OurClints from './component/our clients/ourClints';
import Contact from './component/contact/contect';
import { BrowserRouter as Router, Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <Router>
      <div className="container-flued">
      
      <Route exact path="/" component={Parent} />
      <Route exact path="/about" component={About} />
      <Route exact path="/chairmanMessage" component={ChairmanMessage} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/ourClints" component={OurClints} />
      <Route exact path="/contact" component={Contact} />
      
      
      
      
      

      </div>
      </Router>
    );
  }
}

export default App;
