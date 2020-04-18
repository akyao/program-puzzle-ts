import thePouring from '../p43';

test('ex0', () => {
  expect(thePouring([20, 20],
                    [5, 8],
                    [0],
                    [1]))
    .toStrictEqual([0, 13]);
});

test('ex01', () => {
    expect(thePouring([10, 10],
                        [5, 8],
                        [0],
                        [1]))
        .toStrictEqual([3, 10]);
});

test('ex02', () => {
    expect(thePouring([30, 20, 10],
                        [10, 5, 5],
                        [0, 1, 2],
                        [1, 2, 0]))
        .toStrictEqual([10, 10, 0]);
});

test('ex03', () => {
    expect(thePouring([14, 35, 86, 58, 25, 62],
                        [6, 34, 27, 38, 9, 60],
                        [1, 2, 4, 5, 3, 3, 1, 0],
                        [0, 1, 2, 4, 2, 5, 3, 1]))
        .toStrictEqual([0, 14, 65, 35, 25, 35]);
});

test('ex04', () => {
    expect(thePouring([700000, 800000, 900000, 1000000],
                        [478478, 478478, 478478, 478478],
                        [2, 3, 2, 0, 1],
                        [0, 1, 1, 3, 2]))
        .toStrictEqual([0, 156956, 900000, 856956]);
});