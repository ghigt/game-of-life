import { sum, checkCell, cellNeighbours, computeCellState, computeGridState } from './grid';

/* sum */

test('calculate sum of array', () => {
  expect(sum([1,1,1,1])).toBe(4);
  expect(sum([0,1,1,1])).toBe(3);
  expect(sum([0,0,1,1])).toBe(2);
  expect(sum([0,0,0,1])).toBe(1);
  expect(sum([0,0,0,0])).toBe(0);
});

/* computeCellState */

test('compute new state with 4 ns alive', () => {
  expect(computeCellState(0, [1,1,1,1])).toBe(0);
  expect(computeCellState(1, [1,1,1,1])).toBe(0);
});

test('compute new state with 3 ns alive', () => {
  expect(computeCellState(0, [1,0,1,1])).toBe(1);
  expect(computeCellState(1, [1,0,1,1])).toBe(1);
});

test('compute new state with 2 ns alive', () => {
  expect(computeCellState(0, [1,0,0,1])).toBe(0);
  expect(computeCellState(1, [1,0,0,1])).toBe(1);
});

test('compute new state with 1 ns alive', () => {
  expect(computeCellState(0, [0,0,0,1])).toBe(0);
  expect(computeCellState(1, [0,0,0,1])).toBe(0);
});

test('compute new state with 0 ns alive', () => {
  expect(computeCellState(0, [0,0,0,0])).toBe(0);
  expect(computeCellState(1, [0,0,0,0])).toBe(0);
});

/* computeGridState */

test('compute new grid state with 0 ns to 3', () => {
  const grid = [
    [1,0,0,1],
    [0,0,1,0],
    [1,0,1,1],
    [1,1,1,1]
  ];
  const expGrid = [
    [0,0,0,0],
    [0,0,1,0],
    [1,0,0,0],
    [1,0,0,1]
  ]
  expect(computeGridState(grid)).toEqual(expGrid);
});

test('compute new grid state with 4 ns', () => {
  const grid = [
    [1,0,0,1],
    [0,1,1,1],
    [1,1,1,1],
    [1,0,1,1]
  ];

  const expGrid = [
    [0,1,0,1],
    [0,0,0,0],
    [1,0,0,0],
    [1,0,0,1]
  ]
  expect(computeGridState(grid)).toEqual(expGrid);
});

/* checkCell */

test('return actual state of a cell', () => {
  const grid = [
    [0,0,0],
    [1,0,1],
    [0,1,1],
  ]

  expect(checkCell(grid, 0, 0)).toEqual(0);
  expect(checkCell(grid, 0, 1)).toEqual(0);
  expect(checkCell(grid, 1, 0)).toEqual(1);
  expect(checkCell(grid, 1, 1)).toEqual(0);
  expect(checkCell(grid, 0, 2)).toEqual(0);
  expect(checkCell(grid, 1, 2)).toEqual(1);
  expect(checkCell(grid, 2, 2)).toEqual(1);
});

/* cellNeighbours */

test('return actual state of a cell', () => {
  const grid = [
    [0,0,0],
    [1,0,1],
    [0,1,1],
  ]

  expect(cellNeighbours(0, 0, grid)).toEqual([0,0,0,0,0,0,1,0]);
  expect(cellNeighbours(0, 1, grid)).toEqual([0,0,0,0,0,1,0,1]);
  expect(cellNeighbours(1, 0, grid)).toEqual([0,0,0,0,0,0,0,1]);
  expect(cellNeighbours(1, 1, grid)).toEqual([0,0,0,1,1,0,1,1]);
  expect(cellNeighbours(0, 2, grid)).toEqual([0,0,0,0,0,0,1,0]);
  expect(cellNeighbours(1, 2, grid)).toEqual([0,0,0,0,0,1,1,0]);
  expect(cellNeighbours(2, 2, grid)).toEqual([0,1,0,1,0,0,0,0]);
})
