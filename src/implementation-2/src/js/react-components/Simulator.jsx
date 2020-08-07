import React from 'react';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';
import Grid from "./Grid";

class Simulator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: this.initialBoardState()
        };
    }

    componentDidMount() {
        this._scrollToCentreVertically();
        this._scrollToCentreHorizontally()
    }

    initialBoardState() {
        // false to be dead, true to be alive
        const initialState = false;
        return (
            new Array(this.props.height).fill(
                new Array(this.props.width).fill(initialState)
            )
        )
    }

    _scrollToCentreVertically() {
        const { element } = this;

        // Entire height of the app
        const entireHeight = element.scrollHeight;

        // Height of viewport
        const viewportHeight = element.clientHeight;

        if (entireHeight > viewportHeight) {
            this.element.scrollTop = (entireHeight - viewportHeight) / 2;
        }
    }

    _scrollToCentreHorizontally() {
        const { element } = this;

        // Entire width of the app
        const entireWidth = element.scrollWidth

        // Width of viewport
        const viewportWidth = element.clientWidth

        if (entireWidth > viewportWidth) {
            element.scrollLeft = (entireWidth - viewportWidth) / 2
        }
    }

    render() {
        return (
            <main
                className="app"
                data-size={this.props.cellSize}
                ref={element => this.element = element}
            >
                <Grid
                    board={this.state.board}
                    {...this.props}
                />
            </main>
        )
    }
}

export default Simulator;

Simulator.defaultProps = {
    width: 100,
    height: 100,
    cellSize: 40
}

Simulator.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    cellSize: AirbnbPropTypes.range(1, 41) // between 1 and 40, inclusive
}
