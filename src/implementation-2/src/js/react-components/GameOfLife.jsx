import React from 'react';
import ModeNotification from "./ModeNotification";
import NextIterationButton from "./NextIterationButton";

class GameOfLife extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="bar">
                    <h1 className="page-title">Game of Life</h1>
                    <ModeNotification mode="drawing"/>
                    <ModeNotification mode="erasing"/>
                </header>
                <main className="app" />
                <footer className="bar">
                    <div className="footer-contents">
                        <NextIterationButton />
                        <p className="credits">
                            by{" "}
                            <a href="https://robbie.xyz" target="_blank">Robbie Jakob-Whitworth</a>
                        </p>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default GameOfLife;
