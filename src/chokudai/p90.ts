
/**
 * 山本山
 * 
 * 与えられた文字列の後ろに文字列を追加し、回文を生成する
 * その時の文字列の長さを返す
 * 
 * TODO 解説読んだ
 * 
 */
export function find(s: string): number {

    // アルゴリズム
    // 最終的な文字列の長さは最長でも2n - 1になる
    // ex abcd -> abcdcba 
    // 元の文字列の後ろに1..n-1文字まで追加して、回文になるかどうかを確かめていく
    // i = 0 のループでは追加しない。オリジナル文字列のテスト
    for(let i = 0; i < s.length; i++){
        let appendString = reverse(s.substring(0, i));
        let testString:string = s + appendString;
        if (isKaibun(testString)) {
            // 回文になった場合
            return testString.length;
        }
    }

    throw new Error("回文が見つからなかった。ロジックミス");
}

// // 回文までの残り文字列を返す
// export function kaibunLastLength(str: string): number {
//     // これめんどい
//     // 元々の問題と複雑さそこまで変わらないような...
// }

// export function charVariations(str: string): Array<string> {
//     let chars: Array<string> = [];
//     for (let i = 0; i < str.length; i++) {
//         if (chars.indexOf(str.charAt(i) ) == -1) {
//             chars.push(str.charAt(i));
//         }
//     }
//     return chars;
// }

export function isKaibun(s: string): boolean {
    return s === reverse(s);
}

function reverse(s: string) {
    return s.split('').reverse().join('');
}