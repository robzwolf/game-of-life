import '../styles/entry.scss'
import React from 'react'
import ReactDOM from 'react-dom'
// import Render from './render';
// import ComputationEngine from './computation-engine';

// import Form from "./react-components/Form";

// const app = document.querySelector('.app');
// const playPauseButton = document.querySelector('.play-pause');

// const renderEngine = new Render(app, { cellSize: 40 });
// const computationEngine = new ComputationEngine(app, { playPauseButton, body: document.body, app });

import GameOfLife from './react-components/GameOfLife'

ReactDOM.render(<GameOfLife />, document.querySelector('.mount-point'))
