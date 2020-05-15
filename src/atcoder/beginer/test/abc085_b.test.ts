import { Main, fuck } from '../abc085_b';

test('Main', () => {
  Main(`4
10
8
8
6`)
});


test('fuck01', () => {
  expect(fuck([10, 8, 8, 6]))
    .toEqual(3);
});


test('fuck02', () => {
  expect(fuck([15, 15, 15]))
    .toEqual(1);
});

test('fuck03', () => {
  expect(fuck([50, 30, 50, 100, 50, 80, 30]))
    .toEqual(4);
});
