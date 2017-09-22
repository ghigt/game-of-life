import React from 'react';

export default ({ cell }) =>
  <span
    style={{
      width: '10px',
      height: '10px',
      display: 'inline-block',
      backgroundColor: cell ? 'black' : 'white',
    }}
  />;
