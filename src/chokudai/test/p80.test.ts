import digits from '../p80';

test('ex0', () => {
  expect(
    digits(10)
  ).toStrictEqual([3, 9]);
});

test('ex1', () => {
  expect(
    digits(3)
  ).toStrictEqual([2]);
});

test('ex2', () => {
  expect(
    digits(9)
  ).toStrictEqual([2, 4, 8]);
});

test('ex3', () => {
  expect(
    digits(26)
  ).toStrictEqual([5, 25]);
});

test('ex4', () => {
  expect(
    digits(30)
  ).toStrictEqual([29]);
});