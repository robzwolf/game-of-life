import Helpers from './helpers';

class ComputationEngine {
    constructor(app, options = {}) {
        // Initialise variables
        this.playPauseButton = options.playPauseButton;
        this.body = options.body;
        this.app = options.app;

        // Bindings
        this.handlePlayPauseButtonClick = this.handlePlayPauseButtonClick.bind(this);

        // Method calls
        this.setUpPlayPauseListener();
    }

    setUpPlayPauseListener() {
        this.playPauseButton.addEventListener('click', this.handlePlayPauseButtonClick);
    }

    handlePlayPauseButtonClick() {
        this.computeNextIteration();

        if (Helpers.isPaused(this.body)) {
            this.body.classList.add('playing');
        } else {
            this.body.classList.remove('playing');
        }
    }

    computeNextIteration() {
        const board = this.getCurrentBoard();
        const newBoard = [];

        // Sanity check to ensure we're not working on a non-existent board
        if (board.length > 0) {
            board.forEach((row, rowIndex) => {
                const newRow = [];
                row.forEach((cell, cellIndex) => {
                    let newCell;
                    if (ComputationEngine.cellShouldLive(rowIndex, cellIndex, board)) {
                        newCell = true;
                    } else {
                        newCell = false;
                    }
                    newRow.push(newCell);
                });
                newBoard.push(newRow);
            });
        }

        console.log(newBoard);
    }

    getCurrentBoard() {
        const board = [];
        const rows = this.app.querySelectorAll('.row');
        rows.forEach((row) => {
            const cells = Array.from(row.childNodes);
            const cellStatuses = cells.map((cell) => Helpers.cellIsAlive(cell));
            board.push(cellStatuses);
        });
        console.log(board);
        return board;
    }

    /**
     * Rules come from https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules
     * @param rowIndex
     * @param cellIndex
     * @param board
     * @returns {boolean}
     */
    static cellShouldLive(rowIndex, cellIndex, board) {
        const numNeighbours = this.getNumberOfNeighbours(rowIndex, cellIndex, board);
        console.log(numNeighbours);
        const cell = board[rowIndex][cellIndex];

        if (cell === true && numNeighbours === 2 && numNeighbours === 3) {
            return true;
        }

        if (cell === false && numNeighbours === 3) {
            return true;
        }

        return false;
    }

    static getNumberOfNeighbours(rowIndex, cellIndex, board) {
        // If there isn't a row at this rowIndex
        if (!board[rowIndex]) {
            return false;
        }

        // If there isn't a cell at this rowIndex
        if (board[rowIndex][cellIndex] !== true && board[rowIndex][cellIndex] !== false) {
            return false;
        }

        let numNeighbours = 0;
        const directions = ['North', 'NorthEast', 'East', 'SouthEast', 'South', 'SouthWest', 'West', 'NorthWest'];
        directions.forEach((direction) => {
            if (ComputationEngine[`get${direction}Neighbour`](rowIndex, cellIndex, board)) {
                numNeighbours += 1;
            }
        });

        return numNeighbours;
    }

    static getNorthNeighbour(rowIndex, cellIndex, board) {
        try {
            return board[rowIndex - 1][cellIndex];
        } catch (e) {
            return false;
        }
    }

    static getNorthEastNeighbour(rowIndex, cellIndex, board) {
        try {
            return board[rowIndex - 1][cellIndex + 1];
        } catch (e) {
            return false;
        }
    }

    static getEastNeighbour(rowIndex, cellIndex, board) {
        try {
            return board[rowIndex][cellIndex + 1];
        } catch (e) {
            return false;
        }
    }

    static getSouthEastNeighbour(rowIndex, cellIndex, board) {
        try {
            return board[rowIndex + 1][cellIndex + 1];
        } catch (e) {
            return false;
        }
    }

    static getSouthNeighbour(rowIndex, cellIndex, board) {
        try {
            return board[rowIndex + 1][cellIndex];
        } catch (e) {
            return false;
        }
    }

    static getSouthWestNeighbour(rowIndex, cellIndex, board) {
        try {
            return board[rowIndex + 1][cellIndex - 1];
        } catch (e) {
            return false;
        }
    }

    static getWestNeighbour(rowIndex, cellIndex, board) {
        try {
            return board[rowIndex][cellIndex - 1];
        } catch (e) {
            return false;
        }
    }

    static getNorthWestNeighbour(rowIndex, cellIndex, board) {
        try {
            return board[rowIndex - 1][cellIndex - 1];
        } catch (e) {
            return false;
        }
    }
}

export default ComputationEngine;
