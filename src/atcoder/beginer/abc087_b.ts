/**
 * https://atcoder.jp/contests/abs/tasks/abc087_b
 * あなたは、500 円玉を A 枚、100 円玉を B 枚、50 円玉を C 枚持っています。 
 * これらの硬貨の中から何枚かを選び、合計金額をちょうど X 円にする方法は何通りありますか。
 * 同じ種類の硬貨どうしは区別できません。
 * 2 通りの硬貨の選び方は、ある種類の硬貨についてその硬貨を選ぶ枚数が異なるとき区別されます。
 */

export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split("\n");
  const count500: number = new Number(inputs[0]).valueOf();
  const count100: number = new Number(inputs[1]).valueOf();
  const count50: number = new Number(inputs[2]).valueOf();
  const targetYen: number = new Number(inputs[3]).valueOf();
  
  // 問題解決エリア
  const answer = fuck(count500, count100, count50, targetYen);

  //出力エリア
  console.log(answer);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(count500: number,count100: number, count50: number, targetYen: number): number {
  let count = 0;
  for(let i = 0; i <= count500; i++) {
    for(let j = 0; j <= count100; j++) {
      for(let k = 0; k <= count50; k++) {
        const sum = i * 500 + j * 100 + k * 50;
        if (sum === targetYen) {
          count++;
          break;
        } else if (sum > targetYen) {
          break;
        }
      }
    }
  }
  return count;
}