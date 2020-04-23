import encrypt from '../p73';

test('ex0', () => {
  expect(
    encrypt([1, 2, 3])
  ).toEqual(12);
});

test('ex1', () => {
  expect(
    encrypt([1, 3, 2, 1, 1, 3])
  ).toEqual(36);
});

test('ex2', () => {
  expect(
    encrypt([1000, 999, 998, 997, 996, 995])
  ).toEqual(986074810223904000);
});

test('ex3', () => {
  expect(
    encrypt([1, 1, 1, 1])
  ).toEqual(2);
});