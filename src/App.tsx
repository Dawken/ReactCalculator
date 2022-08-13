import React from 'react';
import ResultsContainer from './Results';
import ButtonsContainer from './Buttons';

function App() {
    return (
        <main>
            <div className="calculatorContainer">
                <ResultsContainer />
                <ButtonsContainer />
            </div>
        </main>
    );
}

export default App;
