import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.toggleAlive = this.toggleAlive.bind(this);
    }

    toggleAlive() {
        this.props.setCellState(this.props.xCoord, this.props.yCoord, !this.props.alive);
    }

    render() {
        return (
            <div
                className={["cell", this.props.alive && "alive"].join(" ")}
                // onClick={this.toggleAlive}
                data-x-coord={this.props.xCoord}
                data-y-coord={this.props.yCoord}
            />
        )
    }
}

export default Cell;
