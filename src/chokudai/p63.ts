
import StringNumberMap, { Entry } from '../util/stringNumberMap';

/**
 * 共通の話題
 * 
 */
export default function bestInvitaion(first: Array<string>,
                        second: Array<string>): number
{
    // 話題と登場回数のMapを作成
    var topicNumbers = new StringNumberMap();
    for (let i = 0; i < first.length; i++) {
        var countFirst = topicNumbers.get(first[i]) ?? 0;
        topicNumbers.put(first[i], countFirst + 1);

        var countSecond = topicNumbers.get(second[i]) ?? 0;
        topicNumbers.put(second[i], countSecond + 1);
    }

    // 最大値を見つける
    let max: number = 0;
    // for (var topicNumber in topicNumbers.entrySet()) {
        // TODO topicNumber.valueが参照できない...
        // inはプロパティ網羅だからか。。
    // }
    var fucks: Array<Entry> = topicNumbers.entrySet();
    for (var i = 0; i < fucks.length; i++) {
        max = Math.max(max, fucks[i].value);
    }
    
    return max;
}

