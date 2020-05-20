/**
 * https://atcoder.jp/contests/abs/tasks/arc065_a
 * 英小文字からなる文字列 S が与えられます。 
 * Tが空文字列である状態から始め、以下の操作を好きな回数繰り返すことで S=T とすることができるか判定してください。
 * T の末尾に dream dreamer erase eraser のいずれかを追加する。
 */

export function Main(input: string) {
  // 問題文解体エリア
  // const inputs = input.split("\n");
  // const mochiList = inputs.splice(1).map(s => new Number(s).valueOf());

  // 問題解決エリア
  const answer = fuck(input);

  //出力エリア
  console.log(answer);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(target: string): boolean {
  return suika("", target);
}

function suika(str: string, target: string): boolean {
  if (str.length >= target.length) {
    return false;
  }
  const STRINGS = ["dreamer", "dream", "eraser", "erase"];
  for (let i = 0; i < STRINGS.length; i++) {
    let temp = str + STRINGS[i];
    if (temp === target) {
      return true;
    }
    if(suika(temp, target)){
      return true;
    }
  }
  return false;
}

// 総当りじゃなくて絞ろうとした
// export function fuck(target: string): boolean {
//   const STRINGS = ["dreamer", "dream", "eraser", "erase"];
//   let str = "";
//   // while(true){
//   for(let c = 0; c < 100 ; c++) {
//     let exitLoop = true;;
//     for (let i = 0; i < STRINGS.length; i++) {
//       let temp = str + STRINGS[i];
//       // TODO 部分一致している？ならstrにくっつける
//       if (target.indexOf(temp) == 0) {
//         console.log(temp);
//         str = temp;
//         exitLoop = false;
//         break;
//       }
//     }
//     if (str === target) {
//       return true;
//     }
//     if (exitLoop) {
//       return false;;
//     } 
//   }
//   return false;
// }
