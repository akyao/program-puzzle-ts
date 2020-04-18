/**
 * 
 */
// 初期化
var cards = [];
for(var i=0; i< 100;i ++){
    cards[i] = false;
}

// 裏返しループ
for (var jump = 2; ; jump = jump + 1) {
    var changed = false;
    for (var i = jump - 1; i < 100; i = i + jump) {
        // 裏返す
        cards[i] = !cards[i];
        changed = true;
    }

    if (!changed) {
        // 裏返らなくなったら抜ける
        break;
    }
}

// console.table(cards);

// TODO チェックする
var backCards = [];
cards.forEach(function(card, index){
    if(!card){
        backCards.push(index + 1);
    }
})

console.log(backCards);