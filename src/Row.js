import React, { Component } from 'react';

import Cell from './Cell';

export default class Row extends Component {
  render() {
    const { row } = this.props;

    return (
      <div>
        {row.map((cell, i) => (
          <Cell cell={cell} key={i} />
        ))}
      </div>
    );
  }
}
