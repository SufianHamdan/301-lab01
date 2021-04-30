import React from 'react';
import './App.css';

import Data from './component/data.json'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      show: false,
      details: {}
      
    };
  }

popUpSelectedImg = (beast) => {
  this.setState({
    show: true,
    details: beast
  });
} 
 

handleClose = () => {
  this.setState({
    show: false,
    details: {}
  });
}
  render() { 
    return ( 
      <>
      <Header />
      <SelectedBeast 
        show={this.state.show}
        details={this.state.details}
        handleClose={this.handleClose}
      />
      <Main Data={this.state.data} popUpSelectedImg={this.popUpSelectedImg}/>
      <Footer />
      </>
     );
  }
}
 
export default App;