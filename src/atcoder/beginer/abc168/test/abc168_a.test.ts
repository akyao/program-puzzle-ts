import { Main, fuck } from '../abc168_a';

test('Main', () => {
  Main(`160`)
});

test('fuck01', () => {
  expect(fuck(16))
    .toEqual("pon");
});

test('fuck02', () => {
  expect(fuck(2))
    .toEqual("hon");
});

test('fuck02', () => {
  expect(fuck(183))
    .toEqual("bon");
});