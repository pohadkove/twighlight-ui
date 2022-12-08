/** @typedef {typeof __propDef.props}  FabProps */
/** @typedef {typeof __propDef.events}  FabEvents */
/** @typedef {typeof __propDef.slots}  FabSlots */
export default class Fab extends SvelteComponentTyped<{
    Color?: string | undefined;
    Target?: string | undefined;
    href?: null | undefined;
}, {
    click: MouseEvent;
    mouseover: MouseEvent;
    '*': MouseEvent | UIEvent | Event | FocusEvent | ClipboardEvent | AnimationEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FabProps = typeof __propDef.props;
export type FabEvents = typeof __propDef.events;
export type FabSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        Color?: string | undefined;
        Target?: string | undefined;
        href?: null | undefined;
    };
    events: {
        click: MouseEvent;
        mouseover: MouseEvent;
        '*': MouseEvent | UIEvent | Event | FocusEvent | ClipboardEvent | AnimationEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
