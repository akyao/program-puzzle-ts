import StringNumberMap from '../stringNumberMap';

let sut: StringNumberMap;

beforeEach(() => {
  sut = new StringNumberMap();
});

test('empty map', () => {
  expect(sut.contains("test"))
    .toEqual(false);
  expect(sut.get("test"))
    .toBeNull();
  expect(sut.entrySet())
    .toStrictEqual([]);
});

test('one map', () => {
  sut.put("test", 10);

  expect(sut.contains("test"))
    .toEqual(true);
  expect(sut.get("test"))
    .toEqual(10);
  expect(sut.entrySet())
    .toStrictEqual([["test", 10]]);
});

test('two map', () => {
  sut.put("test1", 11);
  sut.put("test2", 12);

  // ないやつ
  expect(sut.contains("test"))
    .toEqual(false);
  expect(sut.get("test"))
    .toBeNull();

  // ひとつめ
  expect(sut.contains("test1"))
    .toEqual(true);
  expect(sut.get("test1"))
    .toEqual(11);
  
  // ふたつめ
  expect(sut.contains("test2"))
    .toEqual(true);
  expect(sut.get("test2"))
    .toEqual(12);

  expect(sut.entrySet())
    .toStrictEqual([["test1", 11], ["test2", 12]]);
});