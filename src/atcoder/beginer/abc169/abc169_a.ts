/**
 * https://atcoder.jp/contests/abc169/tasks/abc169_a
 * A × B を求めてください。
 */
export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split(" ");
  const num1 = new Number(inputs[0]).valueOf();
  const num2 = new Number(inputs[1]).valueOf();

  // 問題解決エリア
  const answer = fuck(num1, num2);

  //出力エリア
  console.log(answer);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(num1: number, num2: number): number {
  return num1 * num2;
}
