import React from 'react';

type myProps = {
    action: string,
    lastAction: string
}

const ResultsContainer = ({action, lastAction}:myProps) => {
    return (
        <>
            <div className="result">
                <div className="lastAction">{lastAction || '0'}</div>
                <div className="action">{action || '0'}</div>
            </div>
        </>

    );
};

export default ResultsContainer;
