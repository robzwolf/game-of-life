import React from 'react';
import Grid from "./Grid";
import Cell from "./Cell";
import Row from "./Row";

class Simulator extends React.Component {
    constructor(props) {
        super(props);
    }

    _renderRow(numberOfCells, rowIndex) {
        const cells = [];
        for (let i = 0; i < numberOfCells; i += 1) {
            cells.push(
                <Cell xCoord={i} yCoord={rowIndex} />
            )
        }
        console.log(cells);
        return (
            <Row>
                {cells}
            </Row>
        )
    }

    _renderRows(numberOfRows) {
        const rows = [];
        for (let i = 0; i < numberOfRows; i += 1) {
            const row = this._renderRow(this.props.width, i);
            rows.push(row);
        }
        console.log(numberOfRows);
        console.log(rows);
        return rows;
    }

    render() {
        return (
            <div className="app">
                <Grid>
                    {this._renderRows(this.props.height)}
                </Grid>
            </div>
        )
    }
}

export default Simulator;

Simulator.defaultProps = {
    width: 100,
    height: 100,
    cellSize: 7
}
