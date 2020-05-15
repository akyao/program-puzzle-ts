/**
 * https://atcoder.jp/contests/abs/tasks/abc085_c
 * 日本でよく使われる紙幣は、10000 円札、5000 円札、1000 円札です。
 * 以下、「お札」とはこれらのみを指します。
 * 青橋くんが言うには、彼が祖父から受け取ったお年玉袋にはお札が N 枚入っていて、合計で Y 円だったそうですが、嘘かもしれません。
 * このような状況がありうるか判定し、ありうる場合はお年玉袋の中身の候補を一つ見つけてください。
 * なお、彼の祖父は十分裕福であり、お年玉袋は十分大きかったものとします。
 */

import StringNumberMap from "../../util/stringNumberMap";

export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split(" ");
  const n = new Number(inputs[0]).valueOf();
  const targetSum = new Number(inputs[1]).valueOf();
  
  // 問題解決エリア
  const answer = fuck(n, targetSum);

  //出力エリア
  console.log(answer[0]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(n: number, targetSum: number): Array<Result> {
  let answer: Array<Result> = [];
  for(let i10 = 0; i10 <= n; i10++){
    for(let i5 = 0; i10 + i5 <= n; i5++){
      for(let i1 = 0; i10 + i5 + i1 <= n; i1++){
        const sum = i10 * 10000 + i5 * 5000 + i1 * 1000;
        const countSum = i10 + i5 + i1;
        if (sum === targetSum && countSum === n) {
          answer.push(new Result(i10, i5, i1));
        }
      }
    }
  }
  if(answer.length == 0) {
    answer.push(new Result(-1, -1, -1));
  }
  return answer;
}

export class Result {
  constructor(public count10000: number,
              public count5000: number,
              public count1000: number){
  }
}