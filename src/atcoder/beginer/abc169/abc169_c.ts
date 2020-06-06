/**
 * https://atcoder.jp/contests/abc169/tasks/abc169_c
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
  const nums = input.split(" ").map(s => new Number(s).valueOf());

  // console.log(nums);
  // 問題解決エリア
  const answer = fuck(nums[0], nums[1]);

  //出力エリア
  console.log(answer.toString());
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(num1:number, num2:number): string {
  // 素朴な回答
  // return Math.floor(num1 * num2);

  // 小数点計算での誤差が発生するのを避けるため、
  // 一度整数に変換してから計算する
  // これでも不正解...
  // const num1DecimalLength = getDecimalLength(num1);
  // const num2DecimalLength = getDecimalLength(num2);
  // const num1AsInteger = num1 * Math.pow(10, num1DecimalLength);
  // const num2AsInteger = num2 * Math.pow(10, num2DecimalLength);
  
  // const decimalAnswer = (num1AsInteger * num2AsInteger) / Math.pow(10, num1DecimalLength + num2DecimalLength )
  // return Math.floor(decimalAnswer);

  // 制約を理解したあとの解法
  
  // num2 * 100で計算すると
  // 1.10 * 100 が110.00000000000001になる...ので、
  // 一度文字列化して、小数点以下を削った上で再度数値に
  const num2_100_asString = (num2 * 100).toString();
  let commaIndex: number|undefined = num2_100_asString.indexOf(".");
  if (commaIndex == -1) commaIndex = undefined;
  const num2_100 = new Number(num2_100_asString.substr(0, commaIndex)).valueOf();
  const num1AsBigInt = BigInt(num1);
  const num2AsBigInt = BigInt(num2_100);
  const numAsBigInt = num1AsBigInt * num2AsBigInt;
  const numAsString = numAsBigInt.toString();
  // console.log(numAsString);
  const result =  numAsString.substr(0, numAsString.length - 2);
  // 空文字は0
  return result.length == 0 ? "0" : result;
  // これでもまだ1ケースエラー。おれはもう諦めた
}

// 小数点以下の長さを返す
// export function getDecimalLength(num: number): number {
//   const numS = num.toString();
//   if (numS.indexOf(".") == -1) return 0;
//   // 小数点以下の長さ = 文字全体の長さ - (整数部の長さ + "."分の長さ) 
//   return numS.length - (numS.indexOf(".") + 1);
// }