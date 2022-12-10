import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        Color?: string | undefined;
        target?: string | null | undefined;
        href?: string | null | undefined;
        rel?: string | null | undefined;
    };
    events: {
        click: MouseEvent;
        focus: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type FabProps = typeof __propDef.props;
export declare type FabEvents = typeof __propDef.events;
export declare type FabSlots = typeof __propDef.slots;
export default class Fab extends SvelteComponentTyped<FabProps, FabEvents, FabSlots> {
}
export {};
