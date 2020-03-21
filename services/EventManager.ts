import {EventEmitter} from "events";

export default class EventManager {

    private readonly _EventEmitter: EventEmitter;

    public constructor(events: any) {
        this._EventEmitter = new events.EventEmitter();
        return this;
    }

    public getEventEmitter() {
        return this._EventEmitter;
    }
}
