import '../styles/entry.scss';
import Render from './render';
import ComputationEngine from './computation-engine';

const app = document.querySelector('.app');
const playPauseButton = document.querySelector('.play-pause');

const renderEngine = new Render(app, { cellSize: 15, width: 10, height: 10 });
const computationEngine = new ComputationEngine(app, { playPauseButton, body: document.body, app });
