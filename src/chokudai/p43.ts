/**
 * キウイジュース
 */
export default function thePouring(capacities: Array<number>,
                        bottles: Array<number>,
                        fromId: Array<number>,
                        toId: Array<number>): Array<number> 
{
    let resultBottles: Array<number> = bottles;
    for (let i = 0; i < fromId.length; i++) {
        // fromから注げる最大値
        const fromMax = resultBottles[fromId[i]];
        // toへ注げる最大値
        const toMax = capacities[toId[i]] - resultBottles[toId[i]];
        // 注ぐ量
        const moveAmount: number = Math.min(fromMax, toMax);

        // 注ぐ
        resultBottles[fromId[i]] = resultBottles[fromId[i]] - moveAmount;
        resultBottles[toId[i]] = resultBottles[toId[i]] + moveAmount;
    }
    
    return resultBottles;
}

