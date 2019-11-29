import Helpers from './helpers';

class Render {
    constructor(app, options = {}) {
        this.app = app;

        this.helloWorld();
        this.addBoxes(options);
    }

    setCellSize(size) {
        if (!Helpers.cssRuleExists(`[data-size="${size}"] .row .cell`)) {
            console.error('Invalid size: ', size);
        } else {
            this.app.dataset.size = size;
        }
    }

    addBoxes({ width = 100, height = 100, cellSize = 7 }) {
        const container = document.createElement('div');
        container.classList.add('cells');

        for (let i = 0; i < width; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < height; j++) {
                const cell = this.createCell(i, j);
                row.appendChild(cell);
            }
            container.appendChild(row);
        }

        this.setCellSize(cellSize);
        this.app.appendChild(container);

        this.scrollToCentre();
    }

    scrollToCentre() {
        this.scrollToCentreVertically();
        this.scrollToCentreHorizontally();
    }

    scrollToCentreHorizontally() {
        // Entire width of the app
        const entireWidth = this.app.scrollWidth;

        // Width of viewport
        const viewportWidth = this.app.clientWidth;

        if (entireWidth > viewportWidth) {
            this.app.scrollLeft = (entireWidth - viewportWidth) / 2;
        }
    }

    scrollToCentreVertically() {
        // Entire height of the app
        const entireHeight = this.app.scrollHeight;

        // Height of viewport
        const viewportHeight = this.app.clientHeight;

        if (entireHeight > viewportHeight) {
            this.app.scrollTop = (entireHeight - viewportHeight) / 2;
        }
    }

    createCell(xCoord, yCoord) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.xCoord = xCoord;
        cell.dataset.yCoord = yCoord;
        return cell;
    }

    helloWorld() {
        console.log('initialised render');
    }
}

export default Render;
