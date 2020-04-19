import React, { Component } from 'react';
import uuid from 'react-uuid'
import './App.scss';

import Canvas from './Canvas';
import Controls from './Controls';

class App extends Component {
  state = {
    num: 0,
    rectangleData: [],
    rectangleElements: [],
    canvasId: uuid(),
    isGenerated: false,
  }

  setGenerated = (hasMade) => {
    this.setState({
      isGenerated: hasMade,
    });
  }

  setNum = (userChoice) => {
    this.setState({
      num: parseInt(userChoice)
    });
  }

  setData = (rect) => {
    this.state.rectangleData.push(rect);
  }

  saveData = () => {
    console.log('saveData');
    console.log(JSON.stringify(this.state.rectangleData));
    // window.localStorage.setItem(this.state.canvasId, )
  }

  clearData = () => {
    this.setState({
      rectangleData: [],
    });
  }

  setRectangleElements = (rect) => {
    this.state.rectangleElements.push(rect);
  }

  clearRectangleElements = () => {
    this.setState({
      rectangleElements: [],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="">
          header!
        </header>
        <aside>
          <Controls
            setNum={this.setNum}
            clearData={this.clearData}
            saveData={this.saveData}
            setGenerated={this.setGenerated}
          />
        </aside>
        <main>
          <Canvas
            numRectangles={this.state.num}
            setData={this.setData}
            rectangleElements={this.state.rectangleElements}
            isGenerated={this.state.isGenerated}
          />
        </main>
      </div>
    );
  }
}

export default App;
