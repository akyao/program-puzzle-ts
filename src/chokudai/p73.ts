
/**
 * 暗号文
 * 数字の配列が渡される
 * その中のひとつだけ1を加える
 * その後すべての数字の積を求める
 * 積の値が最大になるのはどの数値に1を加えた場合か
 * その時の最大値を返却せよ
 */
export default function encrypt(numbers: Array<number>): number {

    const sumProductReducer = (accumulator: number, currentValue:number) => accumulator * currentValue;

    let max: number = 0;
    for (let i = 0; i < numbers.length; i++) {
        const plusoneNumbers = numbers.map((val, j) => val + (i == j ? 1 : 0));
        const sumProduct = plusoneNumbers.reduce(sumProductReducer);
        max = Math.max(max, sumProduct);
    }    
    return max;
}

