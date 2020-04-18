/**
 * 10000以下の偶数のうち、以下の条件を満たす数はいくつあるか
 * 初期値に3をかけて1を足す。
 * 以降は、偶数の場合2で割る
 * 奇数の場合は、3をかけて、1をたす
 * それを繰り返してもとの値に戻る
 */

var results: Array<number> = [];

for(var i = 2; i <= 10000; i = i + 2){
    if(isBackNumber(i)) {
        results.push(i);
    }
}

console.log(results);
console.log(results.length);

function isBackNumber(initialNumber: number) : boolean {
    var paths: Array<number> = [];
    var n = (initialNumber * 3) + 1;

    // 元の数値に戻ったらtrue
    // 元の数値以外に再度到達したら、それ以降繰り返しても元の数値には戻らない
    while(true) {
        // 判定
        if (n == initialNumber) {
            return true;
        } else if (paths.lastIndexOf(n) > 0) {
            return false;
        }
        
        // 経路に追加
        paths.push(n);

        // 数値への処理
        if(n % 2 == 0) {
            n = n / 2;
        } else {
            n = (n * 3) + 1;
        }   
    }
}