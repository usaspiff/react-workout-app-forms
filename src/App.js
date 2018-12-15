import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FormContainer from './containers/FormContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <div className="col-md-6" style={{ marginLeft: "40px" }}>
        <Header />
        <h3>Create a new excercise list</h3>
        <FormContainer />
        <Footer />
      </div>;
  }
}

export default App;
