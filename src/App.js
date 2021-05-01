import React from 'react';
import './App.css';

import Data from './component/data.json'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast';
import MyForm from './component/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      show: false,
      details: {},
      numOfHorns: ''
      
    };
  }

  filterData = (event) => {
    if (this.state.numOfHorns !== 'All') {
      this.setState({
        data: Data.filter(animal => animal.horns === Number(this.state.numOfHorns))});
    }
    else{
      this.setState({
        data: Data.filter(animal => animal.horns> 0)});
    }
  }

  updateHorns = horns => this.setState({ numOfHorns: horns.target.value });

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
      <MyForm filterData={this.filterData}
          numOfHorns={this.state.numOfHorns}
          updateHorns={this.updateHorns}
          cornsAnimals={this.state.cornsAnimals}/>
      <Main Data={this.state.data} popUpSelectedImg={this.popUpSelectedImg} cornsAnimals={this.state.cornsAnimals}/>
      <Footer />
      </>
     );
  }
}
 
export default App;