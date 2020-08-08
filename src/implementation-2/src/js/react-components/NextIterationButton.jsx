import React from 'react';
import PropTypes from 'prop-types';

const NextIterationButton = ({ handleNextIterationClick }) => (
    <button
        className="play-pause"
        onClick={handleNextIterationClick}
        type="button"
    >
        Next Iteration →
    </button>
)

export default NextIterationButton;

NextIterationButton.propTypes = {
    handleNextIterationClick: PropTypes.func.isRequired,
}
