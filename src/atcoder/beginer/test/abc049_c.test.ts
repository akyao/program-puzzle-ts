import { Main, fuck } from '../abc049_c';

test('Main', () => {
  Main(`erasedream`)
});

test('ex1', () => {
  expect(fuck("erasedream"))
    .toEqual(true);
});

test('ex2', () => {
  expect(fuck("dreameraser"))
    .toEqual(true);
});

test('ex3', () => {
  expect(fuck("dreamerer"))
    .toEqual(false);
});