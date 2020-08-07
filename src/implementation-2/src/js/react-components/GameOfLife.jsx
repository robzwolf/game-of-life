import React from 'react';
import ModeNotification from "./ModeNotification";

class GameOfLife extends React.Component {
    render() {
        return (
        <header className="bar">
            <h1 className="page-title">Game of Life</h1>
            <ModeNotification mode="drawing" />
            <ModeNotification mode="erasing" />
        </header>
        
        )
    }
}

export default GameOfLife;
