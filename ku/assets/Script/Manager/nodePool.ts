export default class nodePool {
    /**
     * author by Joy
     * object pool
     */
    private _pool: any = [];
    constructor() {
    }

    public size(): number {
        return this._pool.length;
    }
    public clear(): void {
        var count = this._pool.length;
        for (var i = 0; i < count; ++i) {
            this._pool[i].destroy();
        }
        this._pool.length = 0;
    }
    public put(obj: any): void {
        if (obj && this._pool.indexOf(obj) === -1) {
            obj.removeFromParent(false);
        }
        this._pool.push(obj);
    }

    public get(): any {
        var last = this._pool.length - 1;
        if (last < 0) {
            return null;
        }
        else {
            var obj = this._pool[last];
            this._pool[last] = null;
            this._pool.length = last;
            return obj;
        }
    }
}