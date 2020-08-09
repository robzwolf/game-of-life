import ComputationEngine from "./computation-engine.js";

const glider = [
    [false,  true, false],
    [false, false,  true],
    [ true,  true,  true]
]

const randomCell = () => Math.random() >= 0.5;

const randomRow = (width) => {
    const row = [];
    for (let i = 0; i < width; i += 1) {
        row.push(randomCell());
    }
    return row;
}

const initialBoardState = (width, height, numIterations) => {
    const gliderArea = 3 + (numIterations / 4); // Number of cells in each direction needed to allow the glider to translate once
    const gliderX = Math.floor(Math.random() * (height - gliderArea)); // Start the glider in a random position on the board
    const gliderY = Math.floor(Math.random() * (height - gliderArea));

    const board = [];

    // Create the first few blank rows
    for (let i = 0; i < gliderY; i += 1) {
        const blankRow = Array(width).fill(false);
        board.push(blankRow);
    }

    // Insert the glider
    for (let j = 0; j < glider.length; j += 1) {
        const firstPartOfRow = Array(gliderX).fill(false);
        const middlePartOfRow = glider[j];
        const endOfRow = Array(width - gliderX - glider[j].length).fill(false);
        const row = [
            ...firstPartOfRow,
            ...middlePartOfRow,
            ...endOfRow
        ]
        board.push(row);
    }

    // Create the final few blank rows
    for (let k = gliderY + glider.length; k < height; k += 1) {
        const blankRow = Array(width).fill(false);
        board.push(blankRow);
    }

    return board;
}

const hrtimeToMillseconds = (hrtime) => ( hrtime[0] * 1000000 + hrtime[1] / 1000 ) / 1000;

const width = 20;
const height = 20;
const numIterations = 20;
const initialBoard = initialBoardState(width, height, numIterations);

// console.log(`Running ${  numIterations  } iterations of a ${width}x${height} board. All times in milliseconds.`);
// for (let i = 0; i < numIterations; i += 1) {
//     const start = process.hrtime();
//     ComputationEngine.computeNextIteration(initialBoard);
//     const diff = process.hrtime(start);
//     console.log(hrtimeToMillseconds(diff));
// }
