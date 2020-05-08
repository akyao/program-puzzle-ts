import { fuck } from '../abc086_a';

test('ex0', () => {
  expect(fuck(3, 4))
    .toEqual(true);
});

test('ex0', () => {
  expect(fuck(1, 21))
    .toEqual(false);
});