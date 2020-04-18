/*
 * 10進数、２進数、8進数のいずれで表現しても回文数となる数のうち、
 * 10進数の10以上で最小の値を求めなさい
 * ()探すのは奇数だけでよかった
 */
for(var i=10; i<1000; i++){
    if(isKaibun(i, 10) && isKaibun(i, 8) && isKaibun(i, 2)) {
        console.log("%s, %s, %s", i, i.toString(8), i.toString(2));
        return;
    }
}

function isKaibun(num, radix) {
    var str = i.toString(radix);
    return str === reverse(str);
}

function reverse(str) {
    return str.split('').reverse().join('');
}