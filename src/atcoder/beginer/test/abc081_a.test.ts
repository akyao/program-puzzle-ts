import { fuck } from '../abc081_a';

test('ex0', () => {
  expect(fuck("101"))
    .toEqual(2);
});

test('ex1', () => {
  expect(fuck("000"))
    .toEqual(0);
});

test('ex2', () => {
  expect(fuck("11101"))
    .toEqual(4);
});