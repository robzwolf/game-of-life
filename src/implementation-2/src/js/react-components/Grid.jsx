import React from 'react';
import Row from "./Row";

class Grid extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const cell = event.target;
        const { xCoord, yCoord } = cell.dataset;
        const alive = this.props.board[yCoord][xCoord];
        this.props.setCellState(xCoord, yCoord, !alive);
    }

    render() {
        return (
            <div
                className="cells"
                onClick={(e) => this.handleClick(e)}
            >
                {[...new Array(this.props.height)].map((_, i) =>
                    <Row
                        width={this.props.width}
                        rowIndex={i}
                        key={`row-${i}`}
                        rowBoard={this.props.board[i]}
                        oldRowBoard={[...this.props.oldBoard[i]]}
                        setCellState={this.props.setCellState}
                    />
                )}
            </div>
        )
    }
}

export default Grid;
