/**
 * https://atcoder.jp/contests/abs/tasks/abc081_b
 * 黒板に n 個の正の整数 
 * A1,...,An が書かれています．
 * すぬけ君は，黒板に書かれている整数がすべて偶数であるとき，次の操作を行うことができます．
 * 黒板に書かれている整数すべてを，2 で割ったものに置き換える．
 * すぬけ君は最大で何回操作を行うことができるかを求めてください．
 */

/**
 * a b
 */
export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split("\n");
  const count = inputs[0];
  const arr: Array<number> = inputs[1].split(" ").map(s => new Number(s).valueOf());
  
  // 問題解決エリア
  const answer = fuck(arr);

  //出力エリア
  console.log(answer);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(arr: Array<number>): number {
  let count = 0;
  while(true) {

    // 偶数判定(undefinedがややこしい)
    const oddIndex = arr.find(v => (v % 2 == 1));
    const hasOdd = oddIndex != undefined && oddIndex >= 0;
    if (hasOdd) {
      return count;
    }
    count++;
    
    // TODO 半分にする
    arr = arr.map(v => v / 2);
  }
}