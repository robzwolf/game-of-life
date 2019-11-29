import Helpers from './helpers';

class Render {
    constructor(app, options = {}) {
        // Initialise variables
        this.app = app;
        this.currentlyDragging = false;

        // Bindings
        // See https://stackoverflow.com/a/31368520/2176546
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleCellMouseEnter = this.handleCellMouseEnter.bind(this);

        // Method calls
        this.addBoxes(options);
        this.setupClickListener();
    }

    setCellSize(size) {
        if (!Helpers.cssRuleExists(`[data-size="${size}"] .row .cell`)) {
            // eslint-disable-next-line no-console
            console.error('Invalid size: ', size);
        } else {
            this.app.dataset.size = size;
        }
    }

    addBoxes({ width = 100, height = 100, cellSize = 7 }) {
        const container = document.createElement('div');
        container.classList.add('cells');

        for (let i = 1; i <= width; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 1; j <= height; j++) {
                const cell = Render.createCell(i, j);
                row.appendChild(cell);
                cell.addEventListener('mouseenter', this.handleCellMouseEnter);
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

    setupClickListener() {
        this.app.addEventListener('mousedown', this.handleMouseDown);
        this.app.addEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseDown(event) {
        this.currentlyDragging = true;
        if (event.target.classList.contains('cell')) {
            event.target.classList.toggle('alive');
        }
    }

    handleMouseUp() {
        this.currentlyDragging = false;
    }

    /**
     * If user is dragging and currentlyDragging flag is true, make the cell alive
     * We don't toggle alive/dead because if the user mouses out and back into a cell then
     * it toggles in a way the user doesn't necessarily expect
     * @param event
     */
    handleCellMouseEnter(event) {
        const cell = event.target;
        if (this.currentlyDragging) {
            cell.classList.add('alive');
        }
    }

    static createCell(xCoord, yCoord) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.xCoord = xCoord;
        cell.dataset.yCoord = yCoord;
        return cell;
    }
}

export default Render;
