export module EventMode{
    export class EventSetting{
        private _initNum:number = 1;
        public _initString:string ="abc";
        constructor(){
            console.log(this._initString);
        }
    }
}
