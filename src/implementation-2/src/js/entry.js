import "../styles/entry.scss";
import React from "react";
import ReactDOM from "react-dom";
import GameOfLife from "./react-components/GameOfLife";

ReactDOM.render(<GameOfLife />, document.querySelector(".mount-point"));

// Functions for testing and evaluation
window.iterations = (numIterations) => {
    for (let i = 0; i < numIterations; i += 1) {
        window.nextIteration();
    }
}
