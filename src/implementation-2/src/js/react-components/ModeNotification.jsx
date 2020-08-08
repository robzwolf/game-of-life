import React from 'react';

class ModeNotification extends React.Component {
    render() {
        return (
            <aside className={`${this.props.mode}-mode mode-notification`}>
                <span>
                    {this.props.mode}
                    {' '}
                    mode
                </span>
            </aside>
        )
    }
}

export default ModeNotification;
