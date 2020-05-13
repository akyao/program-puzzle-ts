import { Main, fuck } from '../abc088_b';

test('Main', () => {
  Main(`2
3 1`)
});


test('fuck01', () => {
  expect(fuck([3, 1]))
    .toEqual(2);
});

test('fuck02', () => {
  expect(fuck([2, 7, 4]))
    .toEqual(5);
});

test('fuck03', () => {
  expect(fuck([20, 18, 2, 18]))
    .toEqual(18);
});

test('fuck04', () => {
  expect(fuck([2, 1, 2, 1]))
    .toEqual(0);
});