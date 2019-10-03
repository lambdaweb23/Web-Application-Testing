import React from 'react';

const Display = (props) => {
    const { ballCount, strikeCount } = props;
    
    return (
        <section className="display">
            <div className="ball-score">
                <h2>Balls: {ballCount}</h2>
            </div>
            <div className="strike-score">
                <h2>Strikes: {strikeCount}</h2>
            </div>
        </section>
    )
}

export default Display;