class Render {
    constructor(app) {
        this.app = app;

        this.helloWorld();
        this.addBoxes();
    }

    addBoxes(width = 100, height = 100) {
        const container = document.createElement('div')
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
