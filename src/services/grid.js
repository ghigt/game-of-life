
// return the sum of the array
export const sum = (arr = []) => arr.reduce((agg, c) => agg + c, 0);

// return the state of a cell
export const computeCellState = (state, neighbours = []) => {
  switch (sum(neighbours)) {
    case 2:
      return state;
    case 3:
      return 1;
    default:
      return 0;
  }
}

// return the cell value from coordonates and grid being careful of borders
export const checkCell = (grid, x, y) => {
  if (x < 0 || y < 0 || x === grid.length || y === grid[x].length) {
    return 0;
  }
  return grid[x][y];
};

// return array of neighbours
export const cellNeighbours = (x, y, grid) => {
  return [
    checkCell(grid, x-1, y-1),
    checkCell(grid, x-1, y),
    checkCell(grid, x-1, y+1),
    checkCell(grid, x, y-1),
    checkCell(grid, x, y+1),
    checkCell(grid, x+1, y-1),
    checkCell(grid, x+1, y),
    checkCell(grid, x+1, y+1),
  ];
};

// return the new state of the all grid
export const computeGridState = (grid = []) => {
  return grid.map((row, x) =>
    row.map((cell, y) =>
      computeCellState(grid[x][y], cellNeighbours(x, y, grid)))
  );
};
