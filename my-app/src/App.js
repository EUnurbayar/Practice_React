import React from 'react';
import './App.css';
import {Header} from './components/header';
import Footer from './components/footer';


function createAlert(){
  alert('You clicked');
}

function App() {
  return (
    <div className="App">
      <Header info="This is my message" />
      <p>This is main content</p>
      <Footer trademark="page by Eegii" myalert={createAlert}/>
    </div>
  );
}

export default App;
