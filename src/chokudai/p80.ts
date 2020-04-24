
/**
 * おもしろい数字
 * 
 * 3と9にはおもしろい性質がある
 * 3の倍数の各桁を足し合わせると、その数も3の倍数となる
 * ex. 354, 3 + 5 + 4 = 12
 * 9も同様。
 * ただし上記の関係は10進数だから成立し、5進数の場合は成立しない
 * 
 * n進数の場合に、上記の性質が成立する数字の配列を返せ
 */
export default function digits(base: number): Array<number> {

    // 目的の性質を持つ数値をスペシャルナンバーと表現する
    let specialNumbers: Array<number> = [];
    
    // 2から(base-1)までの数値を検証する
    // 注意:baseを越える数値は2桁になっちゃうので、検証対象外
    for (let i = 2; i < base; i++) {
        if (isSpecialNumber(i, base)) {
            specialNumbers.push(i);
        }
    }

    return specialNumbers;
}

function test(checkNumber: number, base:number) {
    const multipleInBase:string = checkNumber.toString(base);
    const digits: Array<number> = multipleInBase.split("")
                                                .map(s => new Number(s).valueOf());
    const sumOfDigits = digits.reduce(sumReducer);
    console.log(sumOfDigits);
}

const sumReducer = (accumulator: number, currentValue:number) => accumulator + currentValue;

function isSpecialNumber(checkNumber: number, base:number): boolean {
    for (let i = 2; i < 1000; i++) {
        let multiple = checkNumber * i;
        // base進数に変換
        const multipleInBase:string = multiple.toString(base);
        // base進数の各桁に分解
        const digits: Array<number> = multipleInBase.split("")
                                                    .map(s =>  parseInt(s, base));
        // base進数の各桁の総和
        const sumOfDigits = digits.reduce(sumReducer);

        // その結果がcheckNumberの倍数になっているか？
        if (sumOfDigits % checkNumber != 0) {
            return false;
        }
    }
    return true;
}

