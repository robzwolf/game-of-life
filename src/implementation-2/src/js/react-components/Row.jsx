import React from 'react';
import PropTypes from 'prop-types';
import Cell from "./Cell";

class Row extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { rowBoard, oldRowBoard } = nextProps;
        // Row only needs to update if any of the cell aliveness states have changed
        for (let i = 0; i < nextProps.rowBoard.length; i += 1) {
            if (rowBoard[i] !== oldRowBoard[i]) {
                return true;
            }
        }

        return false;
    }

    render() {
        const { width, rowIndex, rowBoard, setCellState, handleCellMouseEnter } = this.props;
        return (
            <div className="row">
                {[...new Array(width)].map((_, i) =>
                    <Cell
                        xCoord={i}
                        yCoord={rowIndex}
                        key={`cell-${i}-${rowIndex}` /* eslint-disable-line react/no-array-index-key */}
                        isAlive={rowBoard[i]}
                        setCellState={setCellState}
                        handleCellMouseEnter={handleCellMouseEnter}
                    />
                )}
            </div>
        )
        // See https://github.com/yannickcr/eslint-plugin-react/issues/1123#issuecomment-288802108 for react/no-array-index-key
    }
}

export default Row;

Row.propTypes = {
    rowBoard: PropTypes.arrayOf(PropTypes.bool).isRequired,
    oldRowBoard: PropTypes.arrayOf(PropTypes.bool).isRequired,
    width: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,
    setCellState: PropTypes.func.isRequired,
    handleCellMouseEnter: PropTypes.func.isRequired,
}
