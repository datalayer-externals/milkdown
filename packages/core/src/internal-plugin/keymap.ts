import type { Keymap } from 'prosemirror-commands';
import { keymap as proseKeymap } from 'prosemirror-keymap';
import type { Plugin as ProsemirrorPlugin } from 'prosemirror-state';
import { createCtx } from '../context';
import { marksCtx, nodesCtx, schemaCtx, SchemaReady } from '../internal-plugin';
import { createTiming } from '../timing';
import type { MilkdownPlugin } from '../utility';

export const keymapCtx = createCtx<ProsemirrorPlugin[]>([]);
export const KeymapReady = createTiming('KeymapReady');

export const keymap: MilkdownPlugin = (pre) => {
    pre.inject(keymapCtx);

    return async (ctx) => {
        await SchemaReady();

        const nodes = ctx.get(nodesCtx);
        const marks = ctx.get(marksCtx);
        const schema = ctx.get(schemaCtx);

        const nodesKeymap = nodes.map((cur) => {
            const node = schema.nodes[cur.id];
            if (!node) throw new Error();
            return cur.keymap?.(node, schema);
        });
        const marksKeymap = marks.map((cur) => {
            const mark = schema.marks[cur.id];
            if (!mark) throw new Error();
            return cur.keymap?.(mark, schema);
        });

        const keymapList = [...nodesKeymap, ...marksKeymap]
            .filter((keys): keys is Keymap => Boolean(keys))
            .map((keys) => proseKeymap(keys));

        ctx.set(keymapCtx, keymapList);
        KeymapReady.done();
    };
};
