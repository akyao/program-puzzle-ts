
/**
 * FriendScore
 * 
 * 友達と、友達の友達の数が一番多い人物のスコアを返す
 * 
 * Set使うためには
 *  定義ファイルのインストールと
 *  npm install --save-dev @types/core-js
 *  tscconfig.json.targetをES2015以降にする必要があった
 */
export function heighestScore(friends: string[]): number {

    let max = 0;
    for (let i = 0; i < friends.length; i++) {
        // 自分の友だち
        let myFriends = friendsSet(friends[i]);
        // 友達の友達
        let friendsOfFriends = new Array<Set<number>>();
        for (let friend of myFriends) {
            friendsOfFriends.push(friendsSet(friends[friend]));
        }
        // 合計
        let allOfFriends = union([myFriends, ...friendsOfFriends]);
        // 自分を消す
        allOfFriends.delete(i);
        // maxに登録
        max = Math.max(max, allOfFriends.size);
    }
    return max;
}

export function friendsSet(friends: string): Set<number> {
    let friendsSet = new Set<number>();
    for (let i = 0; i < friends.length; i++) {
        if (friends.charAt(i) === 'Y') {
            friendsSet.add(i);
        }
    }
    return friendsSet
}

export function union(sets: Array<Set<number>>) :Set<number> {
    let unionSet = new Set<number>();
    for (let i = 0; i< sets.length; i++) {
        let targetSet = sets[i];
        for (let item of targetSet) {
            unionSet.add(item);
        }
    }
    return unionSet;
}
