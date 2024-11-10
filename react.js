import React, { useState } from 'react';

const Calculator = () => {
    const [calc, setCalc] = useState({ num: 0, operator: '', result: 0 });

    const handleClick = ({ target: { name } }) => {
        let { num, operator, result } = calc;

        switch (name) {
            case 'C':
                setCalc({ num: 0, operator: '', result: 0 });
                break;
            case '=':
                setCalc({ num: result, result: eval(`${result} ${operator} ${num}`) });
                break;
            case '+/-':
                setCalc({ ...calc, num: num * -1 });
                break;
            case '%':
                setCalc({ ...calc, num: num / 100 });
                break;
            default:
                if (!isNaN(name) || name === '.') {
                    setCalc({ ...calc, num: parseFloat(num + name) });
                } else {
                    setCalc({ ...calc, operator: name });
                }
                break;
        }
    };

    return (
        <div>
            <p>{calc.num}</p>
            {['C', 'X', '÷', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '%', '+/-', '0', '.', '='].map((btn) => (
                <button key={btn} name={btn} onClick={handleClick}>{btn}</button>
            ))}
        </div>
    );
};

export default Calculator;

