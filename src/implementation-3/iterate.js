import ComputationEngine from "./computation-engine.js";

const randomCell = () => Math.random() >= 0.5;

const randomRow = (width) => {
    const row = [];
    for (let i = 0; i < width; i += 1) {
        row.push(randomCell());
    }
    return row;
}

const initialBoardState = (width, height) => {
    return Array(height).fill(null).map(() => randomRow(width));
}

const width = 4;
const height = 4;
const randomBoard = initialBoardState(width, height);
console.log(randomBoard);

const nextBoard = ComputationEngine.computeNextIteration(randomBoard);
console.log(nextBoard);
