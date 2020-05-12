import { Main, fuck } from '../abc083_b';

test('Main', () => {
  Main(`20 2 5`)
});


test('fuck01', () => {
  expect(fuck(20, 2, 5))
    .toEqual(84);
});

test('fuck02', () => {
  expect(fuck(10, 1, 2))
    .toEqual(13);
});

test('fuck03', () => {
  expect(fuck(100, 4, 16))
    .toEqual(4554);
});
