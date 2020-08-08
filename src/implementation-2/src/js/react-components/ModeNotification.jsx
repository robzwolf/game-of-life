import React from 'react';
import PropTypes from 'prop-types';

const ModeNotification = ({ mode }) => {
    return (
        <aside className={`${mode}-mode mode-notification`}>
            <span>
                {mode}
                {' '}
                mode
            </span>
        </aside>
    )
}

export default ModeNotification;

ModeNotification.propTypes = {
    mode: PropTypes.string.isRequired,
}
