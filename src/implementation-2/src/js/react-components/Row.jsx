import React from 'react';
import Cell from "./Cell";

class Row extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // Row only needs to update if any of the cell aliveness states have changed
        for (let i = 0; i < nextProps.rowBoard.length; i += 1) {
            if (nextProps.rowBoard[i] !== this.props.oldRowBoard[i]) {
                return true;
            }
        }

        return false;
    }

    render() {
        return (
            <div className="row">
                {[...new Array(this.props.width)].map((_, i) =>
                    <Cell
                        xCoord={i}
                        yCoord={this.props.rowIndex}
                        key={`cell-${i}-${this.props.rowIndex}`}
                        isAlive={this.props.rowBoard[i]}
                        setCellState={this.props.setCellState}
                    />
                )}
            </div>
        )
    }
}

export default Row;
