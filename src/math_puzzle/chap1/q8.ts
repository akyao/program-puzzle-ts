/**
 * 掃除ロボット
 */
 namespace Ore {
    // 場所。
    class Location {
        x: number
        y: number

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        move(moveLocation: Location) {
            return new Location(this.x + moveLocation.x, this.y + moveLocation.y );
        }
    }

    const moveCount = 12;
    let routeCount: number = 0;

    // 動きかたの種類(それぞれ上、右、下、左への移動)
    const movePatterns: Array<Location> = [new Location(0, 1), new Location(1, 0), new Location(0, -1), new Location(-1, 0)]

    // 初期位置は0,0とする
    let currentLocation = new Location(0, 0);

    // 今まで通った場所を保存する
    let routeLocations: Array<Location> = [];
    routeLocations.push(currentLocation);

    // 上に行ったパターンを計算
    fuck(currentLocation, [...routeLocations], movePatterns[0], moveCount - 1);
    
    // 上下左右のルートの数は同じなので、4倍
    routeCount = routeCount * 4;

    console.log("経路の数:", routeCount);

    function fuck(currentLocation: Location, routeLocations: Array<Location>, moveLocation: Location, moveCount: number) {
        // スタートから上下左右のうち、ひとつのルートを計算する
        let nextLocation = currentLocation.move(moveLocation);

        if (!locationIncludes(routeLocations, nextLocation)) {
            // まだ通っていないルートの場合
            
            if (moveCount === 0) {
                // これが経路の終点の場合
                routeCount++;
                return;
            }
        } else {
            // 通ったことのあるルートであれば、これ以上の探索は不要
            return;
        }

        if (moveCount > 0) {
            routeLocations.push(nextLocation);
            for (var i = 0; i < movePatterns.length; i++) {
                fuck(nextLocation, [...routeLocations], movePatterns[i], moveCount - 1);
            }
        }
    }

    function locationIncludes(list: Array<Location>, location: Location) : boolean {
        return JSON.stringify(list).indexOf(JSON.stringify(location)) > - 1;
    }
 }
