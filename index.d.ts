export interface Options {
  syntax?: string;
  context?: string;
  tabSize?: number;
}

export type Node = {
  type: string,
  start: {
    line: number,
    column: number,
  },
  end: {
    line: number,
    column: number,
  },
  content: Node[] | string,
  syntax: string,
  toString(): string,
}

export function parse(css: string, options?: Options): Node;