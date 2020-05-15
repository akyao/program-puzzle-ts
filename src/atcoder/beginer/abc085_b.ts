/**
 * https://atcoder.jp/contests/abs/tasks/abc085_b
 * X 段重ねの鏡餅 (X≥1) とは、X 枚の円形の餅を縦に積み重ねたものであって、どの餅もその真下の餅より直径が小さい（一番下の餅を除く）もののことです。
 * 例えば、直径 10、8、6 センチメートルの餅をこの順に下から積み重ねると 3 段重ねの鏡餅になり、餅を一枚だけ置くと 1 段重ねの鏡餅になります。
 * ダックスフンドのルンルンは N 枚の円形の餅を持っていて、そのうち i 枚目の餅の直径は di センチメートルです。
 * これらの餅のうち一部または全部を使って鏡餅を作るとき、最大で何段重ねの鏡餅を作ることができるでしょうか。
 */

export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split("\n");
  const mochiList = inputs.splice(1).map(s => new Number(s).valueOf());

  // 問題解決エリア
  const answer = fuck(mochiList);

  //出力エリア
  console.log(answer);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(mochiList: Array<number>): number {
  let sorted = mochiList.sort().reverse();
  let count = 0;
  let prevValue:number|null = null;
  sorted.forEach(function(v) {
    if(v !== prevValue) {
      count++;
    }
    prevValue = v;
  });

  return count;
}