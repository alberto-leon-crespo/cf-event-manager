import * as path from "path";

export function Event(eventName: string) {
    return async (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const kernel = await import(path.join(path.resolve("."), process.argv[1]));
        kernel._Container.get('eventmanager').getEventEmitter().on(eventName, descriptor.value);
        return descriptor;
    };
}
