/** @typedef {typeof __propDef.props}  AvatarProps */
/** @typedef {typeof __propDef.events}  AvatarEvents */
/** @typedef {typeof __propDef.slots}  AvatarSlots */
export default class Avatar extends SvelteComponentTyped<{
    Img?: string | undefined;
    Size?: string | undefined;
    Style?: string | undefined;
    Alt?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AvatarProps = typeof __propDef.props;
export type AvatarEvents = typeof __propDef.events;
export type AvatarSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        Img?: string | undefined;
        Size?: string | undefined;
        Style?: string | undefined;
        Alt?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
