
export default class StringNumberMap {
    keys: Array<string>  = [];
    values: Array<number>  = [];

    public put(key:string, value:number) {
        this.keys.push(key);
        this.values.push(value);
    }

    public get(key:string): number | null{
        const index = this.keys.indexOf(key);
        return index >= 0 ? this.values[index] : null;
    }

    public contains(key:string): boolean {
        return this.keys.indexOf(key) >= 0;
    }

    public entrySet(): Array<[string, number]> {
        let result: Array<[string, number]> = [];
        for (let i = 0; i < this.keys.length; i++) {
            result.push([ this.keys[i], this.values[i] ]);
        }
        return result;
    }
}