import React, { Component } from 'react';

import './App.css';

import { computeGridState } from './services/grid';

import Grid from './Grid';

export default class App extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      grid: [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
      ],
      timeout: 1000,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(({grid}) => ({
        grid: computeGridState(grid)
      }));
    }, 1000);
  }

  onChange(e) {
    console.log(e.target);
  }

  render() {
    const { grid, timeout } = this.state;

    return (
      <div className="App">
        {/* <input type="range" min="100" max="1000" value={timeout} onChange={this.onChange} /> */}
        <Grid grid={grid} />
      </div>
    );
  }
}
