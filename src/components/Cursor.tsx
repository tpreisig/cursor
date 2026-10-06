import React, { useState, useEffect } from 'react';

const Cursor = (): React.JSX.Element => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const eventHandler = (e: PointerEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('pointermove', eventHandler);
        return () => {
            window.removeEventListener('pointermove', eventHandler);
        };
    }, []);
    const numStyle: React.CSSProperties = {
        display: 'inline-block',
        width: '6ch',
        textAlign: 'right',
        fontFamily: 'monospace'
    };
    return (
        <section>
            <div>
                x: <span style={numStyle}>{position.x.toFixed(1)}</span>, y: <span style={numStyle}>{position.y.toFixed(1)}</span>
            </div>
            <div style={{
                position: 'absolute',
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
            }} className='cursorPos'>
                🖱️
            </div>
        </section>
    )
}

export default Cursor
