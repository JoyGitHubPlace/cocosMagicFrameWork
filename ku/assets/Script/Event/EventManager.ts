export module EventMode{
    export class EventManager{
        private _initNum:number = 1;
        public _initString:string ="123";
        constructor(){
            console.log(this._initNum);
        }
    }
}