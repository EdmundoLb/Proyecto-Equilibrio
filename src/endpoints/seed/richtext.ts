import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

// Helpers para escribir contenido Lexical del seed sin repetir la estructura JSON completa.

const text = (value: string, bold = false) => ({
  type: 'text',
  detail: 0,
  format: bold ? 1 : 0,
  mode: 'normal',
  style: '',
  text: value,
  version: 1,
})

type Node = ReturnType<typeof heading> | ReturnType<typeof paragraph>

export const heading = (tag: 'h1' | 'h2' | 'h3' | 'h4', value: string) => ({
  type: 'heading',
  children: [text(value)],
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  tag,
  version: 1,
})

export const paragraph = (value: string) => ({
  type: 'paragraph',
  children: [text(value)],
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  textFormat: 0,
  version: 1,
})

export const richText = (...children: Node[]): DefaultTypedEditorState =>
  ({
    root: {
      type: 'root',
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }) as DefaultTypedEditorState
