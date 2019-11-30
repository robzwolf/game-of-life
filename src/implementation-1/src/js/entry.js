import '../styles/entry.scss';
import Render from './render';
import ComputationEngine from './computation-engine';

const app = document.querySelector('.app');
const renderEngine = new Render(app, { cellSize: 15 });
const computationEngine = new ComputationEngine(app);
