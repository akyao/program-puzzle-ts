import { Main, fuck, Result } from '../abc085_c';

test('Main', () => {
  Main(`9 45000`)
});


test('fuck01', () => {
  expect(fuck(9, 45000))
    .toContainEqual(new Result(4, 0, 5));
});

test('fuck2', () => {
  expect(fuck(20, 196000))
    .toContainEqual(new Result(-1, -1, -1));
});

test('fuck03', () => {
  expect(fuck(1000, 1234000))
    .toContainEqual(new Result(14, 27, 959));
});

test('fuck044', () => {
  expect(fuck(2000, 20000000))
    .toContainEqual(new Result(2000, 0, 0));
});

