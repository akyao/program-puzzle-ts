/**
 * 両替。小銭15枚以内
 * 10,50, 100, 500円。
 * 小銭の組み合わせはどのくらいあるか
 */

const INPUT: number = 100;

const COINS: Array<number> = [500, 100, 50, 10];

var combinationCount: number = 0;

var zandaga = INPUT;
for(var coinIndex = 0; coinIndex < 4; coinIndex++){
    var coin = COINS[coinIndex];
    if (coin <= zandaga) {
        
    }
}


console.log('組み合わせ数 %s', combinationCount);

