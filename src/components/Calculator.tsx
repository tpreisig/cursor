import React, { useReducer } from 'react'
import type { State, Action } from '../types';

const initialState: State = { display: 0, operand: null, op: null };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'digit':
            return { ...state, display: state.display * 10 + action.value };
        case 'op':
            return { display: 0, operand: state.display, op: action.op };
        case 'equals': {
            if (state.operand == null || state.op == null) return state;
            const display =
                state.op === '+'
                    ? state.operand + state.display
                    : state.operand - state.display;
            return { display, operand: null, op: null };
        }
        case 'clear':
            return initialState;
        default: {
            const _exhaustive: never = action;
            return _exhaustive;
        }
    }
}

const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <section>
            <output>{state.display}</output>
            Calculator
            <div>
                {[1, 2, 3].map(n => (
                    <button key={n} onClick={() => dispatch({ type: 'digit', value: n })}>
                        {n}
                    </button>
                ))}
                <button onClick={() => dispatch({ type: 'op', op: '+' })}>+</button>
                <button onClick={() => dispatch({ type: 'op', op: '-' })}>-</button>
                <button onClick={() => dispatch({ type: 'equals' })}>=</button>
                <button onClick={() => dispatch({ type: 'clear' })}>C</button>
            </div>
        </section>

    )
}

export default Calculator
