import React from "react";
import PropTypes from "prop-types";

class Cell extends React.PureComponent {
    constructor(props) {
        super(props);

        this.toggleAlive = this.toggleAlive.bind(this);
    }

    toggleAlive() {
        const { setCellState, xCoord, yCoord, isAlive } = this.props;
        setCellState(xCoord, yCoord, !isAlive);
    }

    render() {
        const { handleCellMouseEnter, xCoord, yCoord, isAlive } = this.props;
        return (
            <div
                className={["cell", isAlive && "alive"].join(" ")}
                onMouseEnter={(e) => handleCellMouseEnter(e)}
                data-x-coord={xCoord}
                data-y-coord={yCoord}
            />
        );
    }
}

export default React.memo(Cell);

Cell.propTypes = {
    setCellState: PropTypes.func.isRequired,
    handleCellMouseEnter: PropTypes.func.isRequired,
    xCoord: PropTypes.number.isRequired,
    yCoord: PropTypes.number.isRequired,
    isAlive: PropTypes.bool.isRequired,
};
