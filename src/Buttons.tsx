import React from 'react';

type myProps = {
    action: string,
    setAction: React.Dispatch<string>,
    setLastAction: React.Dispatch<string>
}

const ButtonsContainer = ({action, setAction,setLastAction}:myProps) => {

    const updateValue = (value:string) => {
        setAction(action + value);
    };
    const solveAction = () => {
        setAction(eval(action.toString()));
        setLastAction(action+'=');
    };
    const deleteAction = () => {
        const value = action.toString();
        setAction(value.slice(0, -1));
    };

    return (
        <div className="operators">
            <button onClick={() => updateValue('(')}>(</button>
            <button onClick={() => updateValue(')')}>)</button>
            <button onClick={() => updateValue('^')}>^</button>
            <button onClick={deleteAction}>Del</button>
            <button onClick={() => updateValue('7')}>7</button>
            <button onClick={() => updateValue('8')}>8</button>
            <button onClick={() => updateValue('9')}>9</button>
            <button onClick={() => updateValue('/')}>/</button>
            <button onClick={() => updateValue('4')}>4</button>
            <button onClick={() => updateValue('5')}>5</button>
            <button onClick={() => updateValue('6')}>6</button>
            <button onClick={() => updateValue('*')}>*</button>
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
