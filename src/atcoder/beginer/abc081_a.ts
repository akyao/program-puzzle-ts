/**
 * https://atcoder.jp/contests/abs/tasks/abc081_a
 * すぬけ君は 1,2,3の番号がついた  3つのマスからなるマス目を持っています。 各マスには 0 か 1 が書かれており、マス i には s iが書かれています。
 * すぬけ君は 1 が書かれたマスにビー玉を置きます。 ビー玉が置かれるマスがいくつあるか求めてください。
 */

/**
 * a b
 */
export function Main(input: string) {
  // 問題文解体エリア
  

  // 問題解決エリア
  const answer = fuck(input);

  //出力エリア
  console.log(answer);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(a: string): number {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "1") {
      count++;
    }
  }
  return count;
}