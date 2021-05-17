// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import poolManager from "./Manager/poolManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NodeItem extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property(cc.Sprite)
    public img:cc.Sprite = null;

    @property({ type: cc.Button, displayName: "desBtn" })
    public desBtn:cc.Button;

    // onLoad () {}

    start () {
        this.desBtn.node.on('click', this.desinfo, this);
    
    }
    desinfo():void{
        poolManager.instance.putNode(this.node);
    }

    // update (dt) {}
}
