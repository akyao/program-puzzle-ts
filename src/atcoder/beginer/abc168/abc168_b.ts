/**
 * https://atcoder.jp/contests/abc168/tasks/abc168_b
 * 
 * ■問題文
 * 英小文字からなる文字列 S があります。
 * S の長さが K 以下であれば、S をそのまま出力してください。
 * S の長さが K を上回っているならば、先頭 K 文字だけを切り出し、末尾に ... を付加して出力してください。
 * 
 * ■制約
 * ・K は 1 以上 100 以下の整数
 * ・S は英小文字からなる文字列
 * ・S の長さは 1 以上 100 以下
 */
export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split("\n");
  const limit = new Number(inputs[0]).valueOf();
  const str = inputs[1];

  // console.log(nums);
  // 問題解決エリア
  const answer = fuck(limit, str);

  //出力エリア
  console.log(answer.toString());
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(limit:number, str:string): string {
  if (str.length > limit) {
    return str.substr(0, limit) + "...";
  } else {
    return str;
  }
}