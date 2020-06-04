import { Main, fuck, Position } from '../abc089_a';

test('Main', () => {
  Main(`2
3 1 2
6 1 1`)
});


test('fuck01', () => {
  expect(fuck([
    [3, new Position(1, 2) ],
    [6, new Position(1, 1) ],
  ]))
    .toEqual(true);
});

test('fuck02', () => {
  expect(fuck([
    [2, new Position(100, 100) ],
  ]))
    .toEqual(false);
});

test('fuck03', () => {
  expect(fuck([
    [1, new Position(0, 1) ],
    [10, new Position(0, 10) ],
  ]))
    .toEqual(true);
});

test('fuck04', () => {
  expect(fuck([
    [5, new Position(1, 1) ],
    [100, new Position(1, 1) ],
  ]))
    .toEqual(false);
});