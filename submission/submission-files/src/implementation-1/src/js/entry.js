import '../styles/entry.scss';
import Render from './render';
import ComputationEngine from './computation-engine';

const app = document.querySelector('.app');
const playPauseButton = document.querySelector('.play-pause');

const renderEngine = new Render(app, { cellSize: 40 });
const computationEngine = new ComputationEngine(app, { playPauseButton, body: document.body, app });

// Functions for testing and evaluation
window.iterations = (numIterations) => {
    for (let i = 0; i < numIterations; i += 1) {
        computationEngine.computeNextIteration();
    }
}
