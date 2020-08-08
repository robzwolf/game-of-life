import React from 'react';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';
import Grid from "./Grid";

class Simulator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: this.initialBoardState(),
        };

        this.setCellState = this.setCellState.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleCellMouseEnter = this.handleCellMouseEnter.bind(this);
        this.toggleCell = this.toggleCell.bind(this);
    }

    componentDidMount() {
        this._scrollToCentreVertically();
        this._scrollToCentreHorizontally()
    }

    initialBoardState() {
        // false to be dead, true to be alive
        const initiallyAlive = false;
        return Array(this.props.height).fill().map(() =>
            Array(this.props.width).fill(initiallyAlive)
        );
    }

    setCellState(cellX, cellY, isAlive) {
        const newBoard = [...this.state.board];
        newBoard[cellY][cellX] = isAlive;
        this.setState({
            oldBoard: [...this.state.board],
            board: newBoard
        });
    }

    toggleCell(cellElement) {
        const { xCoord, yCoord } = cellElement.dataset;
        const isAlive = this.state.board[yCoord][xCoord];
        let newAliveState;

        if (this.props.drawing) {
            newAliveState = true;
        } else if (this.props.erasing) {
            newAliveState = false;
        } else {
            newAliveState = !isAlive;
        }

        this.setCellState(xCoord, yCoord, newAliveState);
    }

    handleCellMouseEnter(event) {
        if (this.props.currentlyDragging) {
            this.toggleCell(event.target);
        }
    }

    handleMouseDown(event) {
        this.props.setCurrentlyDragging(true);
        this.toggleCell(event.target);
    }

    handleMouseUp() {
        this.props.setCurrentlyDragging(false);
    }

    _scrollToCentreVertically() {
        const { element } = this;

        // Entire height of the app
        const entireHeight = element.scrollHeight;

        // Height of viewport
        const viewportHeight = element.clientHeight;

        if (entireHeight > viewportHeight) {
            this.element.scrollTop = (entireHeight - viewportHeight) / 2;
        }
    }

    _scrollToCentreHorizontally() {
        const { element } = this;

        // Entire width of the app
        const entireWidth = element.scrollWidth

        // Width of viewport
        const viewportWidth = element.clientWidth

        if (entireWidth > viewportWidth) {
            element.scrollLeft = (entireWidth - viewportWidth) / 2
        }
    }

    render() {
        return (
            <main
                className="app"
                data-size={this.props.cellSize}
                ref={element => this.element = element}
            >
                <Grid
                    board={this.state.board}
                    oldBoard={this.state.oldBoard || [...this.state.board]}
                    setCellState={this.setCellState}
                    handleMouseDown={this.handleMouseDown}
                    handleMouseUp={this.handleMouseUp}
                    handleCellMouseEnter={this.handleCellMouseEnter}
                    {...this.props}
                />
            </main>
        )
    }
}

export default Simulator;

Simulator.defaultProps = {
    width: 100,
    height: 100,
    cellSize: 40
}

Simulator.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    cellSize: AirbnbPropTypes.range(1, 41) // between 1 and 40, inclusive
}
