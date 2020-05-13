/**
 * https://atcoder.jp/contests/abs/tasks/abc088_b
 * N 枚のカードがあります.
 * i 枚目のカードには, ai という数が書かれています.
 * Alice と Bob は, これらのカードを使ってゲームを行います.
 * ゲームでは, Alice と Bob が交互に 1 枚ずつカードを取っていきます.
 * Alice が先にカードを取ります.
 * 2 人がすべてのカードを取ったときゲームは終了し, 取ったカードの数の合計がその人の得点になります. 
 * 2 人とも自分の得点を最大化するように最適な戦略を取った時, Alice は Bob より何点多く取るか求めてください.
 */

export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split("\n");
  const cards: Array<number> = inputs[1]
      .split(" ")
      .map(s => new Number(s).valueOf());

  // 問題解決エリア
  const answer = fuck(cards);

  //出力エリア
  console.log(answer);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(cards: Array<number>): number {
  let sorted = cards.sort((a, b) => b - a);
  const aliceScore = sorted.filter((val, idx) => idx % 2 == 0)
        .reduce((pv, cv) => pv + cv);
  const bobScore = sorted.filter((val, idx) => idx % 2 == 1)
        .reduce((pv, cv) => pv + cv);
  
  return aliceScore - bobScore;
}