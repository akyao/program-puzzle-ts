import { Main, fuck } from '../abc169_c';

test('Main', () => {
  Main(`198 1.10`)
});

test('fuck01', () => {
  expect(fuck(198, 1.10))
    .toEqual("217");
});

test('fuck02', () => {
  expect(fuck(1, 0.01))
    .toEqual("0");
});

test('fuck03', () => {
  expect(fuck(1000000000000000, 9.99))
    .toEqual("9990000000000000");
});


// test('getDecimalLength', () => {
//   expect(getDecimalLength(1))
//     .toEqual(0);
//   expect(getDecimalLength(1.5))
//     .toEqual(1);
//   expect(getDecimalLength(1.05))
//     .toEqual(2);
//   expect(getDecimalLength(10000.987))
//     .toEqual(3);
// });

// productコードでは、decimal.jsなどのライブラリを使おう