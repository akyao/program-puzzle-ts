/**
 * https://atcoder.jp/contests/abs/tasks/abc086_a
 * シカのAtCoDeerくんは二つの正整数 a,bを見つけました。 a と bの積が偶数か奇数か判定してください。
 */

/**
 * a b
 */
export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split(" ");
  const a: number = new Number(inputs[0]).valueOf();
  const b: number = new Number(inputs[1]).valueOf();


  // 問題解決エリア
  const answer = fuck(a, b);

  //出力エリア
  console.log(answer ? "Even" : "Odd");
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 偶数ならtrueを返す
export function fuck(a: number, b: number): boolean {
  const product = a * b;
  return product % 2 == 0;
}