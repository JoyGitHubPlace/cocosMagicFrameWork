import configManager from "../Manager/configManager";
import actionManager from "../actionManager/actionManager";
import poolManager from "../Manager/poolManager";
import Global from "../Manager/Global";
class levelItem {
    public id: number;
    public name: string;
    public levelIndex: number;
    public cost: number;
}
const { ccclass, property } = cc._decorator;

@ccclass
export default class mainPanel extends cc.Component {

    public levelData: Array<levelItem>;
    @property({ type: cc.Node, displayName: "levelView" })
    public levelView: cc.Node;
    public levelViewList: any;

    @property({ type: [cc.Prefab], displayName: "prefabs" })
    public prefabs: cc.Prefab[] = [];
    public px: number = 0;

    public OnItemRender(item: any, idx: number): void {
        console.log("idx", idx);
        if (configManager.instance["level"] != null) {
            let jsondata = configManager.instance["level"];
            console.log(jsondata[idx]);
            let testitem = item.getComponent("testItem");

            testitem.init(jsondata[idx]);
        }

    }
    public addnode() {
        var that = this;
        if (that.prefabs != null) {
            let node = poolManager.instance.getNode("goldPrefab");
            node.parent = that.node;
            node.setPosition(this.px, 0, 0);
            this.px += 50;
        }
    }
    private _destroyEvent(data: any): void {
        console.log("event:", data);
        Global.instance.off("destory", this._destroyEvent, this);
    }
    start() {
        var that = this;
        window["main"] = this;
        configManager.instance.load(function () {
            if (that.levelView != null) {
                if (configManager.instance["level"] != null) {
                    let jsondata = configManager.instance["level"];
                    let lon: number = jsondata.length;
                    that.levelViewList = that.levelView.getComponent("List");
                    that.levelViewList.numItems = lon;
                    that.levelViewList.updateAll()
                }
            }
            if(configManager.instance["action"]!=null){
                actionManager.instance.init(configManager.instance["action"]);
                actionManager.instance.runActionlist();
            }

        });

        
        poolManager.instance.init(that.prefabs);

        Global.instance.init();
        Global.instance.on("destory", this._destroyEvent, this);

    }

    // update (dt) {}
}
