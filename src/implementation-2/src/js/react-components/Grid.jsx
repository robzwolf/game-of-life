import React from 'react';
import Row from "./Row";

class Grid extends React.Component {
    render() {
        return (
            <div className="cells">
                {[...new Array(this.props.height)].map((_, i) =>
                    <Row
                        width={this.props.width}
                        rowIndex={i}
                        key={`row-${i}`}
                    />
                )}
            </div>
        )
    }
}

export default Grid;
