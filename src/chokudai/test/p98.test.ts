import { heighestScore, friendsSet, union } from '../p98';

test('ex0', () => {
  expect(
    heighestScore([
      "NNN",
      "NNN",
      "NNN"
    ])
  ).toEqual(0);
});

test('ex1', () => {
  expect(
    heighestScore([
      "NYY",
      "YNY",
      "YYN"
    ])
  ).toEqual(2);
});

test('ex2', () => {
  expect(
    heighestScore([
      "NYNNN",
      "YNYNN",
      "NYNYN",
      "NNYNY",
      "NNNYN",
    ])
  ).toEqual(4);
});

test('ex3', () => {
  expect(
    heighestScore([
      "NNNNYNNNNN",
      "NNNNYNYYNN",
      "NNNYYYNNNN",
      "NNYNNNNNNN",
      "YYYNNNNNNY",
      "NNYNNNNNYN",
      "NYNNNNNYNN",
      "NYNNNNYNNN",
      "NNNNNYNNNN",
      "NNNNYNNNNN"
    ])
  ).toEqual(8);
});

test('ex4', () => {
  expect(
    heighestScore([
      "NNNNNNNNNNNNNNY",
      "NNNNNNNNNNNNNNN",
      "NNNNNNNYNNNNNNN",
      "NNNNNNNYNNNNNNY",
      "NNNNNNNNNNNNNNY",
      "NNNNNNNNYNNNNNN",
      "NNNNNNNNNNNNNNN",
      "NNYYNNNNNNNNNNN",
      "NNNNNYNNNNNYNNN",
      "NNNNNNNNNNNNNNY",
      "NNNNNNNNNNNNNNN",
      "NNNNNNNNYNNNNNN",
      "NNNNNNNNNNNNNNN",
      "NNNNNNNNNNNNNNN",
      "YNNYYNNNNYNNNNN"
    ])
  ).toEqual(6);
});

test('friendsSet', () => {
  expect(
    friendsSet("N")
  ).toStrictEqual(new Set<number>());
  expect(
    friendsSet("NN")
  ).toStrictEqual(new Set<number>());
  expect(
    friendsSet("Y")
  ).toStrictEqual(new Set<number>([0]));
  expect(
    friendsSet("YNYYN")
  ).toStrictEqual(new Set<number>([0, 2, 3]));
});

test('union', () => {
  expect(
    union([
      new Set(),
      new Set([10, 100, 1000]),
      new Set([10, 200, 9000])
    ])
  ).toStrictEqual(new Set<number>([10, 100, 200, 1000, 9000]));
});

