import { Main, fuck } from '../abc169_a';

test('Main', () => {
  Main(`2 5`)
});

test('fuck01', () => {
  expect(fuck(2, 5))
    .toEqual(10);
});

test('fuck02', () => {
  expect(fuck(100, 100))
    .toEqual(10000);
});