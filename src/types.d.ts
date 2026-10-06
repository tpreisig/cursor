export type State = {
    display: number;
    operand: number | null;
    op: '+' | '-' | null;
}

export type Action =
    | { type: 'digit'; value: number }
    | { type: 'op'; op: '+' | '-' }
    | { type: 'equals' }
    | { type: 'clear' }

export type CountOp = { type: 'increment' } | { type: 'decrement' }
