/**
 * https://atcoder.jp/contests/abc168/tasks/abc168_a
 * 
 * いろはちゃんは、人気の日本製ゲーム「ÅtCoder」で遊びたい猫のすぬけ君のために日本語を教えることにしました。
 * 日本語で鉛筆を数えるときには、助数詞として数の後ろに「本」がつきます。
 * この助数詞はどんな数につくかで異なる読み方をします。
 * 具体的には、999 以下の正の整数 N について、「N 本」と言うときの「本」の読みは
 * N の 1 の位が 2,4,5,7,9 のとき hon
 *・N の 1 の位が 0,1,6,8 のとき pon
 *・N の 1 の位が 3 のとき bonです。
 *・N が与えられるので、「N 本」と言うときの「本」の読みを出力してください。
 *
 * 制約
 * N は 999 以下の正の整数
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

export function fuck(num:number): string {
  const hons = ["2", "4", "5", "7", "9"];
  const pons = ["0", "1", "6", "8"];
  const bons = ["3"];

  const numStr = num.toString();
  const numOn1 = numStr.substr(numStr.length - 1);
  if (hons.indexOf(numOn1) >= 0) {
    return "hon";
  } else if (pons.indexOf(numOn1) >= 0) {
    return "pon";
  } else if (bons.indexOf(numOn1) >= 0) {
    return "bon";
  }
  return "fuck";
}