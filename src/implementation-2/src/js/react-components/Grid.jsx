import React from 'react';
import PropTypes from 'prop-types';
import Row from "./Row";

class Grid extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const cell = event.target;
        const { xCoord, yCoord } = cell.dataset;
        const { board, setCellState } = this.props;
        const alive = board[yCoord][xCoord];
        setCellState(xCoord, yCoord, !alive);
    }

    render() {
        const { handleMouseDown, handleMouseUp, height, width, board, oldBoard, setCellState, handleCellMouseEnter } = this.props;
        return (
            <>
                {/* ESLint rule disabled because this div contains children which are buttons */}
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div
                    className="cells"
                    onMouseDown={(e) => handleMouseDown(e)}
                    onMouseUp={(e) => handleMouseUp(e)}
                >
                    {[...new Array(height)].map((_, i) =>
                        <Row
                            width={width}
                            rowIndex={i}
                            key={`row-${i}` /* eslint-disable-line react/no-array-index-key */}
                            rowBoard={board[i]}
                            oldRowBoard={[...oldBoard[i]]}
                            setCellState={setCellState}
                            handleCellMouseEnter={handleCellMouseEnter}
                        />
                    )}
                </div>
            </>
        )
        // See https://github.com/yannickcr/eslint-plugin-react/issues/1123#issuecomment-288802108 for react/no-array-index-key
    }
}

export default Grid;

Grid.propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
    setCellState: PropTypes.func.isRequired,
    handleMouseDown: PropTypes.func.isRequired,
    handleMouseUp: PropTypes.func.isRequired,
    handleCellMouseEnter: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    oldBoard: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
}
