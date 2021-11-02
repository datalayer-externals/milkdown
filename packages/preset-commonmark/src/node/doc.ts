/* Copyright 2021, Milkdown by Mirone. */
import { createPlugin } from '@milkdown/utils';

export const doc = createPlugin(() => {
    return {
        schema: () => ({
            node: {
                doc: {
                    content: 'block+',
                    parseMarkdown: {
                        match: ({ type }) => type === 'root',
                        runner: (state, node, type) => {
                            state.injectRoot(node, type);
                        },
                    },
                    toMarkdown: {
                        match: (node) => node.type.name === 'doc',
                        runner: (state, node) => {
                            state.openNode('root');
                            state.next(node.content);
                        },
                    },
                },
            },
        }),
    };
});
