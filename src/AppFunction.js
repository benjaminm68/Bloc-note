import logo from './logo.svg';
import './App.css';
import { sampleText } from './sampleText'
import React, { useState } from 'react'

function App() {

  const state = [
    {
      text: sampleText
    }
  ]

  const handleChange = (event) => {
    const text = event.target.value
    // this.setState({ text })
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea className="form-control" value={sampleText} onChange={ handleChange } rows="35"></textarea>
        </div>
        <div className="col-sm-6">
          <div>
            { sampleText }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
