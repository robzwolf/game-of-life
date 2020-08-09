import React from "react";
import PropTypes from "prop-types";
import AirbnbPropTypes from "airbnb-prop-types";
import ModeNotification from "./ModeNotification";
import NextIterationButton from "./NextIterationButton";
import Grid from "./Grid";
import ComputationEngine from "../computation-engine";

class GameOfLife extends React.Component {
    static deepCopy(board) {
        return board.map((row) => row.map((value) => value));
    }

    constructor(props) {
        super(props);

        this.setDrawingFlag = this.setDrawingFlag.bind(this);
        this.setErasingFlag = this.setErasingFlag.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleCellMouseEnter = this.handleCellMouseEnter.bind(this);
        this.toggleCell = this.toggleCell.bind(this);
        this.setCellState = this.setCellState.bind(this);
        this.handleNextIterationClick = this.handleNextIterationClick.bind(
            this
        );

        this.state = {
            currentlyDragging: false,
            drawing: false,
            erasing: false,
            board: this.initialBoardState(),
        };

        document.addEventListener("contextmenu", (e) => e.preventDefault());

        window.addEventListener("keydown", this.handleKeyChange);
        window.addEventListener("keyup", this.handleKeyChange);

        window.nextIteration = this.handleNextIterationClick;
    }

    componentDidMount() {
        this.scrollToCentreHorizontally();
        this.scrollToCentreVertically();
    }

    setCellState(cellX, cellY, isAlive) {
        const { board } = this.state;
        const newBoard = GameOfLife.deepCopy(board);
        const oldBoard = GameOfLife.deepCopy(board);

        newBoard[cellY][cellX] = isAlive;
        this.setState({
            oldBoard,
            board: newBoard,
        });
    }

    setDrawingFlag(flag) {
        if (flag === true) {
            this.setState({
                drawing: true,
                erasing: false,
            });
        } else {
            this.setState({
                drawing: false,
                erasing: false,
            });
        }
    }

    setErasingFlag(flag) {
        const { drawing } = this.state;
        if (flag === true && drawing === false) {
            this.setState({
                erasing: true,
            });
        } else {
            this.setState({
                erasing: false,
            });
        }
    }

    handleMouseDown(event) {
        this.setState({ currentlyDragging: true });
        this.toggleCell(event.target);
    }

    handleMouseUp() {
        this.setState({ currentlyDragging: false });
    }

    handleCellMouseEnter(event) {
        const { currentlyDragging } = this.state;
        if (currentlyDragging) {
            this.toggleCell(event.target);
        }
    }

    toggleCell(cellElement) {
        const { xCoord, yCoord } = cellElement.dataset;
        const { board, drawing, erasing } = this.state;
        const isAlive = board[yCoord][xCoord];

        let newAliveState;
        if (drawing) {
            newAliveState = true;
        } else if (erasing) {
            newAliveState = false;
        } else {
            newAliveState = !isAlive;
        }

        this.setCellState(xCoord, yCoord, newAliveState);
    }

    initialBoardState() {
        // false to be dead, true to be alive
        const initiallyAlive = false;

        const { width, height } = this.props;
        return Array(height)
            .fill(null)
            .map(() => Array(width).fill(initiallyAlive));
    }

    scrollToCentreHorizontally() {
        const { simulatorNode } = this;

        // Entire width of the app
        const entireWidth = simulatorNode.scrollWidth;

        // Width of viewport
        const viewportWidth = simulatorNode.clientWidth;

        if (entireWidth > viewportWidth) {
            simulatorNode.scrollLeft = (entireWidth - viewportWidth) / 2;
        }
    }

    scrollToCentreVertically() {
        const { simulatorNode } = this;

        // Entire height of the app
        const entireHeight = simulatorNode.scrollHeight;

        // Height of viewport
        const viewportHeight = simulatorNode.clientHeight;

        if (entireHeight > viewportHeight) {
            simulatorNode.scrollTop = (entireHeight - viewportHeight) / 2;
        }
    }

    handleKeyChange(event) {
        const newFlag = event.type === "keydown";
        switch (event.key) {
            case "Alt": {
                this.setDrawingFlag(newFlag);
                break;
            }
            case "Control": {
                this.setErasingFlag(newFlag);
                break;
            }
            default: {
                break;
            }
        }
    }

    handleNextIterationClick() {
        const { board } = this.state;
        this.setState({
            oldBoard: GameOfLife.deepCopy(board),
            board: ComputationEngine.computeNextIteration(board),
        });
    }

    render() {
        const { drawing, erasing, board, oldBoard } = this.state;
        const { cellSize, width, height } = this.props;
        return (
            <div
                className={[
                    "container",
                    drawing ? "drawing" : "",
                    erasing ? "erasing" : "",
                ].join(" ")}
            >
                <header className="bar">
                    <h1 className="page-title">Game of Life</h1>
                    <ModeNotification mode="drawing" active={drawing} />
                    <ModeNotification mode="erasing" active={erasing} />
                </header>
                {/* /> */}
                <main
                    className="app"
                    data-size={cellSize}
                    ref={(simulatorNode) => {
                        this.simulatorNode = simulatorNode;
                    }}
                >
                    <Grid
                        board={board}
                        oldBoard={oldBoard || GameOfLife.deepCopy(board)}
                        setCellState={this.setCellState}
                        handleMouseDown={this.handleMouseDown}
                        handleMouseUp={this.handleMouseUp}
                        handleCellMouseEnter={this.handleCellMouseEnter}
                        width={width}
                        height={height}
                        cellSize={cellSize}
                    />
                </main>
                <footer className="bar">
                    <div className="footer-contents">
                        <NextIterationButton
                            handleNextIterationClick={
                                this.handleNextIterationClick
                            }
                        />
                        <p className="credits">
                            by{" "}
                            <a
                                href="https://robbie.xyz"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Robbie Jakob-Whitworth
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default GameOfLife;

GameOfLife.defaultProps = {
    width: 100,
    height: 100,
    cellSize: 40,
};

GameOfLife.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    cellSize: AirbnbPropTypes.range(1, 41), // between 1 and 40, inclusive
};
