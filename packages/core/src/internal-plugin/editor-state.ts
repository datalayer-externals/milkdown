import { baseKeymap } from 'prosemirror-commands';
import { inputRules as createInputRules } from 'prosemirror-inputrules';
import { keymap as createKeymap } from 'prosemirror-keymap';
import { Node, Schema, DOMParser } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
import { createCtx, inputRulesCtx } from '..';
import { createTiming } from '../timing';
import { AnyRecord, MilkdownPlugin } from '../utility';
import { InputRulesReady } from './input-rules';
import { keymapCtx, KeymapReady } from './keymap';
import { Parser, parserCtx, ParserReady } from './parser';
import { prosePluginsCtx } from './prose-plugin-factory';
import { schemaCtx } from './schema';
import { SerializerReady } from './serializer';

type DefaultValue = string | { type: 'html'; dom: HTMLElement } | { type: 'json'; value: AnyRecord };
type StateOptions = Parameters<typeof EditorState.create>[0];

export const defaultValueCtx = createCtx<DefaultValue>('');
export const editorStateCtx = createCtx<EditorState>({} as EditorState);
export const editorStateOptionsCtx = createCtx<StateOptions>({});
export const StateReady = createTiming('StateReady');

const getDoc = (defaultValue: DefaultValue, parser: Parser, schema: Schema) => {
    if (typeof defaultValue === 'string') {
        return parser(defaultValue);
    }

    if (defaultValue.type === 'html') {
        return DOMParser.fromSchema(schema).parse(defaultValue.dom as unknown as Node);
    }

    if (defaultValue.type === 'json') {
        return Node.fromJSON(schema, defaultValue.value);
    }

    throw new Error();
};

export const editorState: MilkdownPlugin = (pre) => {
    pre.inject(defaultValueCtx).inject(editorStateCtx).inject(editorStateOptionsCtx);

    return async (ctx) => {
        await Promise.all([KeymapReady(), InputRulesReady(), ParserReady(), SerializerReady()]);

        const schema = ctx.get(schemaCtx);
        const parser = ctx.get(parserCtx);
        const rules = ctx.get(inputRulesCtx);
        const keymap = ctx.get(keymapCtx);
        const options = ctx.get(editorStateOptionsCtx);
        const prosePlugins = ctx.get(prosePluginsCtx);
        const defaultValue = ctx.get(defaultValueCtx);

        const state = EditorState.create({
            schema,
            doc: getDoc(defaultValue, parser, schema),
            plugins: [...keymap, ...prosePlugins, createKeymap(baseKeymap), createInputRules({ rules })],
            ...options,
        });
        ctx.set(editorStateCtx, state);
        StateReady.done();
    };
};
