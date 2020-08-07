import React from 'react';

class Cell extends React.Component {
    render() {
        return (
            <div
                className={["cell", this.props.alive && "alive"].join(" ")}
                data-x-coord={this.props.xCoord}
                data-y-coord={this.props.yCoord}
            />
        )
    }
}

export default Cell;
