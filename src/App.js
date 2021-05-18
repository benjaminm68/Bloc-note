import logo from './logo.svg';
import './App.css';
import { sampleText } from './sampleText'
import React, { Component, useState } from 'react'
import marked from 'marked'

class App extends Component {

  state = {
    text: sampleText
  }

  componentDidMount() {
    const text = localStorage.getItem('text')
    
    if(text){
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
  }

  componentDidUpdate() {
    const text = this.state.text
    localStorage.setItem('text', text)
  }

  handleChange = (event) => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text =>{
    const __html = marked(text, { sanitize: true })
    return { __html }
  } 

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Bloc note</h1>
        <hr/>
        <div className="row">
          <div className="col-sm-6">
            <textarea className="form-control" value={this.state.text} onChange={this.handleChange} rows="35"></textarea>
          </div>

          <div className="col-sm-6 ouho">
            <div dangerouslySetInnerHTML={ this.renderText(this.state.text) }>

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
