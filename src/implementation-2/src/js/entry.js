import '../styles/entry.scss';
import Render from './render';
import ComputationEngine from './computation-engine';

import Form from "./react-components/Form";

const app = document.querySelector('.app');
const playPauseButton = document.querySelector('.play-pause');

const renderEngine = new Render(app, { cellSize: 40 });
const computationEngine = new ComputationEngine(app, { playPauseButton, body: document.body, app });
