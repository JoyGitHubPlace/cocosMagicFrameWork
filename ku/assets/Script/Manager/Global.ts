export default class Global {
    /**
     * author by Joy
     * Global instance
     * 
     * 1:eventCenter  event.on off once send
     */
    private static _instance: Global;
    public static get instance(): Global {
        if (!Global._instance) {
            Global._instance = new Global();
        }
        return Global._instance;
    }
    constructor() {
    }
    private EventCenter: any;
    private _initEventCenter(): void {
        this.EventCenter = this.EventCenter || new cc.EventTarget();
    }
    public init(): void {
        this._initEventCenter();
    }

    public on(eventName: string, callback: Function, target?: any): void {
        if (this.EventCenter == null) {
            console.warn("EventCenter is not init");
        }
        this.EventCenter.on(eventName, callback, target);
    }
    public off(eventName: string, callback?: Function, target?: any): void {
        if (this.EventCenter == null) {
            console.warn("EventCenter is not init");
        }
        this.EventCenter.off(eventName, callback, target);
    }
    public once(eventName: string, callback: Function, target?: any): void {
        if (this.EventCenter == null) {
            console.warn("EventCenter is not init");
        }
        this.EventCenter.once(eventName, callback, target);
    }
    public event(eventName: string,data:any) {
        if (this.EventCenter == null) {
            console.warn("EventCenter is not init");
        }
        this.EventCenter.emit(eventName,data);
    }
}