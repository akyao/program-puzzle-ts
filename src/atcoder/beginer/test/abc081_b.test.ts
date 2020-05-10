import { Main, fuck } from '../abc081_b';

test('Main', () => {
  Main(`3
8 12 40`)
});


test('fuck01', () => {
  expect(fuck([8, 12, 40]))
    .toEqual(2);
});

test('fuck02', () => {
  expect(fuck([5, 6, 8, 10]))
    .toEqual(0);
});