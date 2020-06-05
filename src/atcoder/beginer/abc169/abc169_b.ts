/**
 * https://atcoder.jp/contests/abc169/tasks/abc169_b
 * N 個の整数 A1,...,AN が与えられます。
 * A1×...×AN を求めてください。
 * ただし、結果が 10^18 を超える場合は、代わりに -1 を出力してください。
 */
export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split("\n");
  const nums = inputs[1].split(" ").map(s => BigInt(new Number(s).valueOf()));

  // 問題解決エリア
  const answer = fuck(nums);

  //出力エリア
  console.log(answer.toString());
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(nums: Array<BigInt>): BigInt {
  // numberで計算するとバグる
  // 1000000000000000001であるべきだが、1000000000000000000になる
  // 例としてrubyだと正しく計算
  // console.log(Number.MAX_SAFE_INTEGER);
  // console.log(101 * 9901 * 999999000001);

  // 最初に0が含まれるかチェックする。そうすれば10^18を超えてるかどうかの検証をfor文内でできるため、タイムアウトなくなる？
  const containsZero: boolean = nums.find(n => n == BigInt(0)) != null;
  if (containsZero) return BigInt(0);

  let result = BigInt(1);
  for (let i = 0; i < nums.length; i++) {
    result = BigInt(nums[i]) * result;
    if (result > Math.pow(10, 18)) return BigInt(-1);
  }
  

  return result;
}
