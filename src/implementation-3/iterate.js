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

const hrtimeToMillseconds = (hrtime) => ( hrtime[0] * 1000000 + hrtime[1] / 1000 ) / 1000;

const width = 100;
const height = 100;
const numIterations = 20;
const randomBoard = initialBoardState(width, height);

console.log(`Running ${  numIterations  } iterations of a ${width}x${height} board. All times in milliseconds.`);
for (let i = 0; i < numIterations; i += 1) {
    const start = process.hrtime();
    ComputationEngine.computeNextIteration(randomBoard);
    const diff = process.hrtime(start);
    console.log(hrtimeToMillseconds(diff));
}
