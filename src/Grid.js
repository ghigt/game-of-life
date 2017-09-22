import React, { Component } from 'react';

import Row from './Row';

export default class Grid extends Component {
  render() {
    const { grid } = this.props;

    return (
      <div>
        {grid.map((row, i) => (
          <Row row={row} key={i} />
        ))}
      </div>
    );
  }
}
