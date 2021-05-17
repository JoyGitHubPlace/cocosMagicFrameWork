import NodeItem from "./NodeItem";
const { ccclass, property } = cc._decorator;

@ccclass
export default class NodeMapManager extends cc.Component {

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:
    @property({ type: cc.Prefab, displayName: "预制体" })
    public nodePrefab: cc.Prefab = null;

    @property({ type: cc.Node, displayName: "父物体" })
    public parentNode: cc.Node = null;
    start() {
        let node: cc.Node = cc.instantiate(this.nodePrefab)
        node.position = new cc.Vec3(0, 0, 0);
        node.parent = this.parentNode;
        let item: NodeItem = node.getComponent("NodeItem");
        item.text = "nodetest";

    }

    // update (dt) {}
}
