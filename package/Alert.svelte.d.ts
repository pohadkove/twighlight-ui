/** @typedef {typeof __propDef.props}  AlertProps */
/** @typedef {typeof __propDef.events}  AlertEvents */
/** @typedef {typeof __propDef.slots}  AlertSlots */
export default class Alert extends SvelteComponentTyped<{
    Color?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        Color?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
