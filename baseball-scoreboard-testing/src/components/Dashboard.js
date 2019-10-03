import React from 'react';

const Dashboard = (props) => {
    const { ballCount, strikeCount, foulCount, hitCount } = props;

    return (
        <div className="dashboard">
            <div className="buttons">
                <button
                    className="ball-button"
                    onClick={ballCount} >
                    Ball
                </button>
                <button
                    className="strike-button"
                    onClick={strikeCount} >
                    Strike
                </button>
                <button
                    className="foul-button"
                    onClick={foulCount} >
                    Foul
                </button>
                <button
                    className="hit-button"
                    onClick={hitCount} >
                    Hit
                </button>
            </div>
        </div>
    );
};

export default Dashboard;