import actionData from "./actionData";
export default class basePlayer
{
    public name:string;
    public tnum:number;
    constructor() {
        
    }
    public init(data:actionData){
        this.name = data.name;
        this.tnum = data.TNum;
    }
    public play(callback:Function):void{
        let that = this;
        setTimeout(() => {
            console.log(that.name);
            callback();
        }, this.tnum);
    }

    public destroy():void{

    }

}