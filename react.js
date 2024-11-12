import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        if (count !== 0) {
            setCount(count + 1);
        }
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default Counter;

