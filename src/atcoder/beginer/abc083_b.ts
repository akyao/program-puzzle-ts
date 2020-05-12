/**
 * https://atcoder.jp/contests/abs/tasks/abc083_b
 * 1 以上 N 以下の整数のうち、10 進法での各桁の和が A 以上 B 以下であるものの総和を求めてください。
 */

export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split(" ");
  const n: number = new Number(inputs[0]).valueOf();
  const a: number = new Number(inputs[1]).valueOf();
  const b: number = new Number(inputs[2]).valueOf();
  
  // 問題解決エリア
  const answer = fuck(n, a, b);

  //出力エリア
  console.log(answer);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(n: number,a: number, b: number): number {
  let result = 0;
  for(let i = 0; i <= n; i++) {
    // 各桁の和をもとめる
    const sumOfDigits = i.toString().split("")
      .map(v => new Number(v).valueOf())
      .reduce((pv, cv) => pv + cv);
    // 比較
    if(a <= sumOfDigits && sumOfDigits <= b){
      result = result + i;
    }
  }
  return result;
}