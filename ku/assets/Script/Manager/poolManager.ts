import nodePool from "./nodePool";
export default class poolManager {
    /**
     * author by Joy
     * object pool manager
     */
    private static _instance: poolManager;
    public static get instance(): poolManager {
        if (!poolManager._instance) {
            poolManager._instance = new poolManager();
        }
        return poolManager._instance;
    }
    constructor() {
    }

    private _poolItems: any = [];
    public _nodesPool: any = [];
    private _maxSize: number = 0;

    public init(prefabs: cc.Prefab[], max: number = 3): void {
        this._maxSize = max;
        prefabs.forEach(element => {
            let poolType = element.name;
            this._poolItems[poolType] = element;
            let np: nodePool = new nodePool();
            this._nodesPool[poolType] = np;

            this.genNode(poolType, max);
        });
    }

    private genNode(type: string, num: number): void {
        for (let i = 0; i < num; ++i) {
            let prefab: cc.Prefab = this._poolItems[type];
            let node = cc.instantiate(prefab);
            node.active = false;
            this._nodesPool[type].put(node);
        }
    }
    public getNode(type: string): any {
        let node: any = null;
        let size = this._nodesPool[type].size();
        if (size > 0) {
            node = this._nodesPool[type].get();
        } else {
            node = cc.instantiate(this._poolItems[type]);
        }
        node.poolType = type;
        node.active = true;
        return node;
    }
    public putNode(node: any): void {
        node.active = false;
        if (node.poolType == null) {
            return;
        }
        if (this._nodesPool[node.poolType].size() + 1 > this._maxSize) {
            node = null;
        } else {
            this._nodesPool[node.poolType].put(node);
        }

    }
    public clearAllNode(type: string): void {
        this._nodesPool[type].clear();
    }
}