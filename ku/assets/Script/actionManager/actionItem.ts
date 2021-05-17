import basePlayer from "./basePlayer";
import actionData from "./actionData";
import handler from "./handler";
export default class actionItem
{
    public _CurrentItem:basePlayer;
    constructor() {
        
    }
    public endBack:handler;
    public init(data:actionData):void{
        this._CurrentItem = new basePlayer();
        this._CurrentItem.init(data);
    }
    public enter(endback:handler):void{
        this.endBack = endback;
        this.Execute();
    }
    public Execute():void{
        let that = this;
        this._CurrentItem.play(function(){that.end()});
    }
    public end():void{
        if(typeof this.endBack!=null){
            this.endBack.runWith("123");
            this.endBack = null;
        }

    }
}