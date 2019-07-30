import React, { Fragment, Component } from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import Services from '../Components/Services';
import Stylist from '../Components/Stylist';
import Locations from '../Components/Locations';
import Footer from '../Components/Footer';

class App extends Component {
 
  render () {
    return (
      <Fragment>
      <Navigation/>
      <Header/>
      <Services/>
      <Stylist/>
      <Locations/>
      <Footer />
    </Fragment>
    )
  }
}


export default App;
