/**
 * https://atcoder.jp/contests/abc169/tasks/abc169_d
 * A × B の小数点以下を切り捨て、結果を整数として出力してください。
 * 
 * 制約
 * 0≤A≤10^15
 * 0≤B<10
 * A は整数
 * B は小数第 2 位まで与えられる
 */
export function Main(input: string) {
  // 問題文解体エリア
  const num = Number(input).valueOf();

  // console.log(nums);
  // 問題解決エリア
  const answer = fuck(num);

  //出力エリア
  console.log(answer.toString());
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(num1:number): number {
  
  return 0
  
}