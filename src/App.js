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
        [0,0,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
      ],
      timeout: 1000,
      interval: null,
    };

    this.onChange = this.onChange.bind(this);
  }

  runInterval(timeout) {
    return setInterval(() => {
      this.setState(({grid}) => ({
        grid: computeGridState(grid)
      }));
    }, timeout);
  }

  componentDidMount() {
    this.setState({ interval: this.runInterval(1000) });
  }

  onChange(e) {
    const timeout = e.target.value;

    clearInterval(this.state.interval)
    this.setState({
      timeout,
      interval: this.runInterval(timeout)
    });
  }

  render() {
    const { grid, timeout } = this.state;

    return (
      <div className="App">
        <input type="range" min="100" max="1000" value={timeout} onChange={this.onChange} />
        <Grid grid={grid} />
      </div>
    );
  }
}
