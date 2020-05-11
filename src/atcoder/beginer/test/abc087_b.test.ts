import { Main, fuck } from '../abc087_b';

test('Main', () => {
  Main(`2
2
2
100`)
});


test('fuck01', () => {
  expect(fuck(2, 2, 2, 100))
    .toEqual(2);
});

test('fuck02', () => {
  expect(fuck(5, 1, 0, 150))
    .toEqual(0);
});

test('fuck03', () => {
  expect(fuck(30, 40, 50, 6000))
    .toEqual(213);
});

test('fuck04', () => {
  expect(fuck(0, 0, 10, 300))
    .toEqual(1);
});

test('fuck04', () => {
  expect(fuck(0, 0, 0, 300))
    .toEqual(0);
});

test('fuck04', () => {
  expect(fuck(1, 10, 0, 1500))
    .toEqual(1);
});
// test('fuck02', () => {
//   expect(fuck([5, 6, 8, 10]))
//     .toEqual(0);
// });