export default class handler{
    public static create(obj:any,FunctionName:string):any{
        return new handler(obj,FunctionName);
    }
    constructor(obj:any,func:string) {
        this._curObj = obj;
        this._curFunc = func;
    }
    private _curObj:any;
    private _curFunc:string;
    public runWith(data:any){
        this._curObj[this._curFunc](data);
    }
}