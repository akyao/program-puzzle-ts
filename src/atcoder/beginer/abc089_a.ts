/**
 * https://atcoder.jp/contests/abs/tasks/arc089_a
 * シカのAtCoDeerくんは二次元平面上で旅行をしようとしています。 
 * AtCoDeerくんの旅行プランでは、時刻 0 に 点 (0,0) を出発し、 1 以上 N 以下の各 i に対し、時刻 ti に 点 (xi,yi) を訪れる予定です。
 * AtCoDeerくんが時刻 t に 点 (x,y) にいる時、 時刻 t+1 には 点 (x+1,y), (x−1,y), (x,y+1), (x,y−1) のうちいずれかに存在することができます。 
 * その場にとどまることは出来ないことに注意してください。 
 * AtCoDeerくんの旅行プランが実行可能かどうか判定してください。
 */

export function Main(input: string) {
  // 問題文解体エリア
  const inputs = input.split("\n");
  const trips: Array<[number, Position]> = inputs.splice(1)
    .map(line => {
      const columns = line.split(" ").map(col => new Number(col).valueOf());
      return [columns[0], new Position(columns[1], columns[2])];
    });

  // 問題解決エリア
  const answer = fuck(trips);

  //出力エリア
  console.log(answer ? "Yes" : "No");
}

class TripPlan {
  constructor(public startPosition: Position, public goalPosition: Position, public sec: number) {
  }
  public move(x: number, y:number) {
    return new TripPlan(this.startPosition.move(x, y), this.goalPosition, this.sec - 1);
  }
  public equals(another: TripPlan) :boolean{
    return this.startPosition.equals(another.startPosition)
      && this.goalPosition.equals(another.goalPosition)
      && this.sec == another.sec;
  }
  // スタート地点とゴール地点、残り時間を考えてワープしないと無理な場合にtrueを返す
  public needWarp(): boolean {
    const distance = Math.abs(this.startPosition.x - this.goalPosition.x)
                    + Math.abs(this.startPosition.y - this.goalPosition.y);
    return distance > this.sec;
  }
}

export class Position {
  constructor(public x: number, public y: number) {
  }
  public move(x: number, y:number) {
    return new Position(this.x - x, this.y - y);
  }
  public equals(another: Position) :boolean{
    return this.x == another.x && this.y == another.y;
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// 提出する時にコメントアウト解除せよ
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export function fuck(params:  Array<[number, Position]>): boolean {
  // parameterをtripPlansに変換
  const tripPlans: Array<TripPlan> = [];
  tripPlans.push(new TripPlan(new Position(0,0), params[0][1], params[0][0]));
  let secs = params[0][0]; // 所要時間を足してく
  for (let i = 1; i < params.length; i++) {
    // スタート地点は前回のゴール地点
    const start = params[i-1][1];
    // ゴール地点
    const goal = params[i][1];
    // 所要時間は、前回までにかかった所要時間を引いたもの
    const sec = params[i][0] - secs;
    secs += sec;
    tripPlans.push(new TripPlan(start, goal, sec));
  }

  // 実行可能化どうかを検証していく(すべて成功=失敗したものがないこと)
  return tripPlans.findIndex(plan => !isPosible(plan)) < 0;
}

export function isPosible(tripPlan: TripPlan): boolean {
  // メモ
  // Map<TripPlan, boolean>だとget処理がうまくいかないのでjsonで文字列化させる
  // JSでもequalsメソッドを使って同一性をチェックしてくれたらいいのに
  let memo = new Map<string, boolean>();
  let searchCount = 0;
  
  function _isPosible(tripPlan: TripPlan):boolean {
    searchCount++;
    let result:boolean;

    // メモ参照
    let memoTrip = memo.get(JSON.stringify(tripPlan));
    if (memoTrip) {
      return memoTrip;
    }

    if (tripPlan.sec == 0) {
      // 時間切れ
      return tripPlan.startPosition.equals(tripPlan.goalPosition);
    }
    
    if(tripPlan.needWarp()) {
      // 枝切り
      result = false;
    } else {
      // 次の移動
      result = _isPosible(tripPlan.move(-1, 0)) 
        || _isPosible(tripPlan.move(1, 0))
        || _isPosible(tripPlan.move(0, -1))
        || _isPosible(tripPlan.move(0, 1));
    }
    
    // メモに保存
    memo.set(JSON.stringify(tripPlan), result);
    return result;
  }
  
  return  _isPosible(tripPlan);
}