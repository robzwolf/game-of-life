import Helpers from './helpers';

class ComputationEngine {
    constructor(app, options = {}) {
        // Initialise variables
        this.playPauseButton = options.playPauseButton;
        this.body = options.body;

        // Bindings
        this.handlePlayPauseButtonClick = this.handlePlayPauseButtonClick.bind(this);

        // Method calls
        this.setUpPlayPauseListener();
    }

    setUpPlayPauseListener() {
        this.playPauseButton.addEventListener('click', this.handlePlayPauseButtonClick);
    }

    handlePlayPauseButtonClick() {
        if (Helpers.isPaused(this.body)) {
            this.body.classList.add('playing');
        } else {
            this.body.classList.remove('playing');
        }
    }
}

export default ComputationEngine;
