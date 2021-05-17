class PClass { };
class leveldata{
    public id:number;
    public name:string;
    public posX:number;
    public posY:number;
}
export default class configManager {
    private static _instance: configManager;
    public static get instance(): configManager {
        if (!configManager._instance) {
            configManager._instance = new configManager(new PClass());
        }
        return configManager._instance;
    }
    constructor(pc: PClass) {
       
    }


    public load(callback:Function):void{
        this.loadConfigReses(function(){callback()})
    }
    private loadConfigReses(successFun = () => { }) {
        var that = this;
        cc.loader.loadResDir("GameData", (err, jsons, urls) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            for (let i = 0; i < jsons.length; ++i) {
                let jsonAsset = jsons[i];
                let url = urls[i];
                let name = url.split("/")[1];
                that[name] = jsonAsset.json;
                
            }
            successFun();
        });
    }
}