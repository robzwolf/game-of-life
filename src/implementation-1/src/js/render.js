class Render {
    constructor(app, options = {}) {
        this.app = app;

        this.helloWorld();
        this.addBoxes(options);
    }

    setCellSize(size) {
        if (![1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(size)) {
            console.error('Invalid size (must be an integer between 1 and 10 inclusive): ', size);
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
