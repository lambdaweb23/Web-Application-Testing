import React from 'react';

const Dashboard = (props) => {
    const { ballCount, strikeCount } = props;

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
            </div>
        </div>
    );
};

export default Dashboard;