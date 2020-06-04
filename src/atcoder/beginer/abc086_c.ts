/**
 * https://atcoder.jp/contests/abs/tasks/arc089_a
 * シカのAtCoDeerくんは二次元平面上で旅行をしようとしています。 
 * AtCoDeerくんの旅行プランでは、時刻 0 に 点 (0,0) を出発し、 1 以上 N 以下の各 i に対し、時刻 ti に 点 (xi,yi) を訪れる予定です。
 * AtCoDeerくんが時刻 t に 点 (x,y) にいる時、 時刻 t+1 には 点 (x+1,y), (x−1,y), (x,y+1), (x,y−1) のうちいずれかに存在することができます。 
 * その場にとどまることは出来ないことに注意してください。
 * AtCoDeerくんの旅行プランが実行可能かどうか判定してください。
 */

export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split("\n");
  const list = inputs.splice(1)
    .map(line => {
      const splitted = line.split(" ").map(s => new Number(s).valueOf());
      return new Param(splitted[0], splitted[1], splitted[2]);
    });

  // 問題解決エリア
  const answer = fuck(list);

  //出力エリア
  console.log(answer);
}

class Param {
  constructor(public t:number, public x:number, public y:number){

  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(list: Array<Param>): boolean {
  return false;
}


