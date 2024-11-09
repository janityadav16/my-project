import React, { useState } from 'react';

const Calculator = () => {
    const [calc, setCalc] = useState({
        num: 0,
        operator: '',
        result: 0
    });

    const handleClick = ({ target: { name } }) => {
        if (name === 'C') {
            setCalc({ num: 0, operator: '', result: 0 });
        } else if (name === '=') {
            setCalc((prevState) => ({
                ...prevState,
                num: prevState.result,
                result: eval(`${prevState.num} ${prevState.operator} ${prevState.num}`)
            }));
        } else if (name === '+/-') {
            setCalc((prevState) => ({ ...prevState, num: prevState.num * -1 }));
        } else if (name === '%') {
            setCalc((prevState) => ({ ...prevState, num: prevState.num / 100 }));
        } else if (name === 'X') {
            setCalc((prevState) => ({ ...prevState, operator: '*' }));
        } else if (name === '÷') {
            setCalc((prevState) => ({ ...prevState, operator: '/' }));
        } else if (name === '-') {
            setCalc((prevState) => ({ ...prevState, operator: '-' }));
        } else if (name === '+') {
            setCalc((prevState) => ({ ...prevState, operator: '+' }));
        } else {
            setCalc((prevState) => ({
                ...prevState,
                num: parseFloat(prevState.num + name)
            }));
        }
    };

    return (
        <div>
            <p>
                {calc.num}
            </p>
            <button name="C" onClick={handleClick}>C</button>
            <button name="X" onClick={handleClick}>X</button>
            <button name="÷" onClick={handleClick}>÷</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="-" onClick={handleClick}>-</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="+" onClick={handleClick}>+</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="%" onClick={handleClick}>%</button>
            <button name="+/-" onClick={handleClick}>+/-</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button name="=" onClick={handleClick}>=</button>
        </div>
    );
};

export default Calculator;

