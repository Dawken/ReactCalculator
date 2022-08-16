import React from 'react';

type myProps = {
    action: string,
    setAction: React.Dispatch<string>,
    setLastAction: React.Dispatch<string>
}

const ButtonsContainer = ({action, setAction,setLastAction}:myProps) => {

    const operators=['÷', '×', '^', '+', '.'];
    const ops=['÷', '×', '^', '+', '-'];
    const numbers=['0', '1', '2', '3','4','5','6','7','8','9'];
    const last = action[action.length-1];
    const value = action.toString();
    const multiplesymbols = ops.some((op) => {
        return op === last;
    });

    const updateValue = (value:string) => {
        const result = action.toString();

        if(operators.includes(value) && result === '' || operators.includes(value) && operators.includes(result.slice(-1)) || value === ')' && last === '(') {
            return;
        }
        if(value === '-' && last === '-' || value === '-' && last === '.' || value === ')' && !action.includes('(') || value === '(' && last === '.' || operators.includes(value) && last === '-') {
            return;
        }
        if(value === '(' && !multiplesymbols && action !== '' && last !== '(') {
            setAction(action.concat('×', value));
            return action;
        }
        if(last === '(' && operators.includes(value)) {
            return;
        }
        if(last === ')' && numbers.includes(value)) {
            setAction(action.concat('×',value));
            return action;
        }
        if(value === ')' && (operators.includes(last) || last === '-')) {
            return ;
        }
        setAction(action.toString() + value);
    };
    const solveAction = () => {
        if(multiplesymbols || last === '(' || action === '') {
            return;
        }
        action = action.replaceAll('^', '**');
        action = action.replaceAll('÷', '/');
        action = action.replaceAll('×', '*');
        setAction(eval(action.toString()));
        setLastAction(action+'=');
        return action.toString();
    };
    const deleteAction = () => {
        setAction(value.slice(0, -1));
    };

    return (
        <div className="operators">
            <button onClick={() => updateValue('(')}>(</button>
            <button onClick={() => updateValue(')')}>)</button>
            <button onClick={() => updateValue('^')}>x<sup>y</sup></button>
            <button onClick={deleteAction}>Del</button>
            <button onClick={() => updateValue('7')}>7</button>
            <button onClick={() => updateValue('8')}>8</button>
            <button onClick={() => updateValue('9')}>9</button>
            <button onClick={() => updateValue('÷')}>÷</button>
            <button onClick={() => updateValue('4')}>4</button>
            <button onClick={() => updateValue('5')}>5</button>
            <button onClick={() => updateValue('6')}>6</button>
            <button onClick={() => updateValue('×')}>×</button>
            <button onClick={() => updateValue('1')}>1</button>
            <button onClick={() => updateValue('2')}>2</button>
            <button onClick={() => updateValue('3')}>3</button>
            <button onClick={() => updateValue('-')}>-</button>
            <button onClick={() => updateValue('0')}>0</button>
            <button onClick={() => updateValue('.')}>.</button>
            <button onClick={solveAction}>=</button>
            <button onClick={() => updateValue('+')}>+</button>
        </div>
    );
};

export default ButtonsContainer;
