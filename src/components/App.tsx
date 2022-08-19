import React, {useState} from 'react';
import ResultsContainer from './Results';
import ButtonsContainer from './Buttons';


function App() {
    const [action, setAction] = useState('');
    const [lastAction, setLastAction] = useState('');
    return (
        <main>
            <div className="calculatorContainer">
                <ResultsContainer action={action} lastAction={lastAction}/>
                <ButtonsContainer action={action} setAction={setAction} setLastAction={setLastAction}/>
            </div>
        </main>
    );
}

export default App;
