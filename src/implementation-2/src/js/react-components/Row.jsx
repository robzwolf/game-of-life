import React from 'react';
import Cell from "./Cell";

class Row extends React.Component {
    render() {
        return (
            <div className="row">
                {[...new Array(this.props.width)].map((_, i) =>
                    <Cell
                        xCoord={i}
                        yCoord={this.props.rowIndex}
                        key={`cell-${i}-${this.props.rowIndex}`}
                    />
                )}
            </div>
        )
    }
}

export default Row;
