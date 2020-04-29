import { find, isKaibun } from '../p90';

test('ex0', () => {
  expect(
    find('abab')
  ).toEqual(5);
});

test('ex1', () => {
  expect(
    find('abacaba')
  ).toEqual(7);
});

test('ex2', () => {
  expect(
    find('qwerty')
  ).toEqual(11);
});

test('ex3', () => {
  expect(
    find('abdfhdyrbdbsdfghjkllkjhgfds')
  ).toEqual(38);
});

test('isKaibun', () => {
  expect(
    isKaibun('a')
  ).toEqual(true);
  expect(
    isKaibun('aba')
  ).toEqual(true);
  expect(
    isKaibun('abc')
  ).toEqual(false);
});

/**
 * 断念したアイデア
 * 
 * abc
 * abc + cba 一番簡単なケースは文字列を反転して、それをくっつければいい
 * 少しまともにすると、最後の一文字は省略可能
 * abc + bcw
 * 
 * abab
 * abab aba
 * abab a 
 * 
 * a b c d c
 * 回文まであと何文字という関数を作成
 * 
 * 文字列に対して順番に文字を追加。上記関数が最小となる文字をループで追加していく
 * 追加する文字はa-zではなく、最初の文字列に含まれている文字に限定する
 * 
 * 
 * 「回文まであと何文字という関数を作成」これ作dるのがめんどい
 */
