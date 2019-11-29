import '../styles/entry.scss';
import Render from './render';

console.log('Hello, world!');

const app = document.querySelector('.app');
const renderEngine = new Render(app, { cellSize: 15 });
