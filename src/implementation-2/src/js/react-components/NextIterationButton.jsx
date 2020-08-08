import React from 'react';

class NextIterationButton extends React.Component {
    render() {
        return (
            <a
                className="play-pause"
                href="#"
                onClick={this.props.handleNextIterationClick}
            >
                Next Iteration →
            </a>
        )
    }
}

export default NextIterationButton;
