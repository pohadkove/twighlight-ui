import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        Color?: string | undefined;
        Target?: string | undefined;
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
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
