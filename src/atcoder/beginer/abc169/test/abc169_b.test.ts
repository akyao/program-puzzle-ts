import { Main, fuck } from '../abc169_b';

test('Main', () => {
  Main(`2
1000000000 1000000000`)
});

test('fuck01', () => {
  expect(fuck(toBigInt([1000000000, 1000000000])))
    .toEqual(BigInt(1000000000000000000));
});

test('fuck--', () => {
  expect(fuck(toBigInt([10, 2, 3, 0])))
    .toEqual(BigInt(0));
});

test('fuck02', () => {
  expect(fuck(toBigInt([101, 9901, 999999000001])))
    .toEqual(BigInt(-1));
});

test('fuck03', () => {
  expect(fuck(toBigInt([4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0])))
    .toEqual(BigInt(0));
});

function toBigInt(nums: Array<number>): Array<BigInt>{
  return nums.map(n => BigInt(n));
}