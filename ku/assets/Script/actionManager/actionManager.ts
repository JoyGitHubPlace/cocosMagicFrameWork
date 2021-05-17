import actionItem from "./actionItem";
import actionData from "./actionData";
import handler from "./handler";
export default class actionManager {


    private static _instance: actionManager;
    private _curIndex = 0;
    public static get instance(): actionManager {
        if (!actionManager._instance) {
            actionManager._instance = new actionManager();
        }
        return actionManager._instance;
    }
    constructor() {

    }

    private _actionDataList: Array<actionData>;
    private _currentAction: actionItem;
    private _NextAction: actionItem;

    public init(data: Array<any>): void {
        let lon = data.length;
        for (let i = 0; i < lon; i++) {
            if (i == 0) {
                this._NextAction = new actionItem();
                this._NextAction.init(data[i]);
            }
            
        }
        this._actionDataList=data;

    }
    private moveNext(data:any){
        console.log(data);
        this._curIndex++;
        this.runActionlist();
    }
    public runActionlist(): void {
        var that = this;
        let lon = this._actionDataList.length;
        if (this._NextAction != null) {
            this._currentAction = this._NextAction;
            this._currentAction.enter(handler.create(that,"moveNext"));
        } else {
            return;
        }

        if (this._curIndex + 1 < lon) {
            let action: actionItem = new actionItem();
            action.init(this._actionDataList[this._curIndex + 1]);
            this._NextAction = action;
        } else {
            this._NextAction = null;
        }

    }
}