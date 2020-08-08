import React from 'react';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';
import ModeNotification from "./ModeNotification";
import NextIterationButton from "./NextIterationButton";
import Grid from "./Grid";
import ComputationEngine from "../computation-engine";

class GameOfLife extends React.Component {
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

        this.engine = new ComputationEngine();

        this.state = {
            currentlyDragging: false,
            drawing: false,
            erasing: false,
            board: this.initialBoardState()
        }

        document.addEventListener(
            'contextmenu',
            e => e.preventDefault()
        )

        window.addEventListener('keydown', this.handleKeyChange);
        window.addEventListener('keyup', this.handleKeyChange);
    }

    componentDidMount() {
        this._scrollToCentreHorizontally()
        this._scrollToCentreVertically()
    }

    _scrollToCentreVertically() {
        const { simulatorNode } = this;

        // Entire height of the app
        const entireHeight = simulatorNode.scrollHeight;

        // Height of viewport
        const viewportHeight = simulatorNode.clientHeight;

        if (entireHeight > viewportHeight) {
            simulatorNode.scrollTop = (entireHeight - viewportHeight) / 2;
        }
    }

    _scrollToCentreHorizontally() {
        const { simulatorNode } = this;

        // Entire width of the app
        const entireWidth = simulatorNode.scrollWidth

        // Width of viewport
        const viewportWidth = simulatorNode.clientWidth

        if (entireWidth > viewportWidth) {
            simulatorNode.scrollLeft = (entireWidth - viewportWidth) / 2
        }
    }

    initialBoardState() {
        // false to be dead, true to be alive
        const initiallyAlive = false;
        return Array(this.props.height).fill().map(() =>
            Array(this.props.width).fill(initiallyAlive)
        );
    }

    toggleCell(cellElement) {
        const { xCoord, yCoord } = cellElement.dataset;
        const isAlive = this.state.board[yCoord][xCoord];
        let newAliveState;

        if (this.state.drawing) {
            newAliveState = true;
        } else if (this.state.erasing) {
            newAliveState = false;
        } else {
            newAliveState = !isAlive;
        }

        this.setCellState(xCoord, yCoord, newAliveState);
    }

    handleCellMouseEnter(event) {
        if (this.state.currentlyDragging) {
            this.toggleCell(event.target);
        }
    }

    handleMouseDown(event) {
        this.setState({currentlyDragging: true});
        this.toggleCell(event.target);
    }

    handleMouseUp() {
        this.setState({currentlyDragging: false});
    }

    setCellState(cellX, cellY, isAlive) {
        const newBoard = [...this.state.board];
        newBoard[cellY][cellX] = isAlive;
        this.setState({
            oldBoard: [...this.state.board],
            board: newBoard
        });
    }

    setDrawingFlag(flag) {
        if (flag === true) {
            this.setState({
                drawing: true,
                erasing: false
            })
        } else {
            this.setState({
                drawing: false,
                erasing: false
            })
        }
    }

    setErasingFlag(flag) {
        if (flag === true && this.state.drawing === false) {
            this.setState({
                erasing: true
            })
        } else {
            this.setState({
                erasing: false
            })
        }
    }

    handleKeyChange(event) {
        const newFlag = (event.type === 'keydown');
        switch (event.key) {
            case 'Alt': {
                this.setDrawingFlag(newFlag);
                break;
            }
            case 'Control': {
                this.setErasingFlag(newFlag);
                break;
            }
            default: {
                break;
            }
        }
    }

    handleNextIterationClick() {
        console.log('next iteration clicked')


    }

    render() {
        return (
            <div className={[
                "container",
                this.state.drawing ? "drawing" : "",
                this.state.erasing ? "erasing" : ""
            ].join(" ")}>
                <header className="bar">
                    <h1 className="page-title">Game of Life</h1>
                    <ModeNotification
                        mode="drawing"
                        active={this.state.drawing}
                    />
                    <ModeNotification
                        mode="erasing"
                        active={this.state.erasing}
                    />
                </header>
                {/*/>*/}
                <main
                    className="app"
                    data-size={this.props.cellSize}
                    ref={simulatorNode => this.simulatorNode = simulatorNode}
                >
                    <Grid
                        board={this.state.board}
                        oldBoard={this.state.oldBoard || [...this.state.board]}
                        setCellState={this.setCellState}
                        handleMouseDown={this.handleMouseDown}
                        handleMouseUp={this.handleMouseUp}
                        handleCellMouseEnter={this.handleCellMouseEnter}
                        width={this.props.width}
                        height={this.props.height}
                        cellSize={this.props.cellSize}
                    />
                </main>
                <footer className="bar">
                    <div className="footer-contents">
                        <NextIterationButton
                            handleNextIterationClick={this.handleNextIterationClick}
                        />
                        <p className="credits">
                            by{" "}
                            <a href="https://robbie.xyz" target="_blank">Robbie Jakob-Whitworth</a>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default GameOfLife;

GameOfLife.defaultProps = {
    width: 100,
    height: 100,
    cellSize: 40
}

GameOfLife.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    cellSize: AirbnbPropTypes.range(1, 41) // between 1 and 40, inclusive
}
