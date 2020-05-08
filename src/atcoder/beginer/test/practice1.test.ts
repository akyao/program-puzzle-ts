import { fuck } from '../practice1';

test('ex0', () => {
  expect(fuck(10, 20, 30, "fuck"))
    .toEqual([60, "fuck"]);
});

test('ex1', () => {
  expect(fuck(1, 2, 3, "test"))
    .toEqual([6, "test"]);
});
