// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import Global from "../Manager/Global";
const {ccclass, property} = cc._decorator;

@ccclass
export default class testitem extends cc.Component {

    @property({ type: cc.Node, displayName: "levelItemObj" })
    public levelItemObj:cc.Node = null;

    @property({ type: cc.Button, displayName: "levelItemObj" })
    public btn_icon:cc.Button;
    public _itemdata:any;
    start () {
        this.btn_icon.node.on('click', this.levelItem, this);
    }
    public init(data:any):void{
        this._itemdata = data; 
        this.levelItemObj.setPosition(data.posX,data.posY,0);
    }
    private levelItem():void{
        console.log(this._itemdata.name);
        Global.instance.event("destory","123");
    }
    // update (dt) {}
}
