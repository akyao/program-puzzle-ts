import { Main, fuck } from '../abc168_b';

test('Main', () => {
  Main(`7
nikoandsolstice`)
});

test('fuck01', () => {
  expect(fuck(7, "nikoandsolstice"))
    .toEqual("nikoand...");
});

test('fuck01', () => {
  expect(fuck(40, "ferelibenterhominesidquodvoluntcredunt"))
    .toEqual("ferelibenterhominesidquodvoluntcredunt");
});

test('fuck01', () => {
  expect(fuck(2, "ferelibenterhominesidquodvoluntcredunt"))
    .toEqual("fe...");
});