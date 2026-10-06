import React, { useReducer } from 'react'
import type { CountOp } from '../types';

const Counter = () => {

    function reducer(state: number, action: CountOp) {
        switch (action.type) {
            case 'increment': return state + 1;
            case 'decrement': return state - 1;
            default: return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, 100);
    return (
        <section>
            <output>{count}</output>
            Counter
            <div>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </div>

        </section>
    )
}

export default Counter
