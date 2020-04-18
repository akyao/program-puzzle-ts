/**
 *  日付を8桁の整数であらわし
 * それを2進数に変換
 * それを逆から並べて、10進数に戻す
 * その時元の日付と同じになるものを見つける
 */

const beginDate: Date = new Date(1964, 9, 11);
const lastDate: Date = new Date(2020, 7, 25);
let answer: Array<number> = [];
for (let d = beginDate; d <= lastDate; d = new Date(d.setDate(d.getDate() + 1))) {
    let yyyyMmDd = toYyyyMmDd(d);
    let yyyyMmDd2: string = yyyyMmDd.toString(2);
    let yyyyMmDd2Back: string = reverse(yyyyMmDd2);
    let yyyyMmDdBack: number = parseInt(yyyyMmDd2Back, 2);
    if (yyyyMmDd === yyyyMmDdBack) {
        answer.push(yyyyMmDd);
    }
}

console.log(answer);

function toYyyyMmDd(date: Date) : number {
    const y = ('000' + date.getFullYear()).slice(-4);
    const m = ('0' + (date.getMonth() + 1)).slice(-2);
    const d = ('0' + (date.getDate())).slice(-2);
    return parseInt(y + m + d);
}

function reverse(str: string) : string {
    return str.split('').reverse().join('');
}