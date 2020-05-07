/**
 * https://atcoder.jp/contests/practice/tasks/practice_1
 * 高橋君はデータの加工が行いたいです。
 * 整数 a,b,cと、文字列 sが与えられます。 
 * a + b + cの計算結果と、文字列sを並べて表示しなさい。
 */

 /**
  * a
  * b c
  * s
  */
export function Main(input: string) {
	// 問題文解体エリア
  const inputs = input.split("\n");
  const inputLine2 = inputs[1].split(" ");
  const a: number = new Number(inputs[0]).valueOf();
  const b: number = new Number(inputLine2[0]).valueOf();
  const c: number = new Number(inputLine2[1]).valueOf();
  const s: string = inputs[2];

	// 問題解決エリア
  const answer = fuck(a, b ,c, s);
  
  //出力エリア
	console.log('%d %s',answer[0], answer[1]);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(a: number, b:number, c:number , s:string): [ number, string] {
  return [a+b+c, s];
}