import React from 'react';
import ModeNotification from "./ModeNotification";
import NextIterationButton from "./NextIterationButton";
import Simulator from "./Simulator";

class GameOfLife extends React.Component {
    constructor(props) {
        super(props);

        this.setCurrentlyDragging = this.setCurrentlyDragging.bind(this);
        this.setDrawingFlag = this.setDrawingFlag.bind(this);
        this.setErasingFlag = this.setErasingFlag.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);

        this.state = {
            currentlyDragging: false,
            drawing: false,
            erasing: false
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyChange);
        window.addEventListener('keyup', this.handleKeyChange);
    }

    setCurrentlyDragging(isDragging) {
        this.setState({currentlyDragging: isDragging});
    }

    setDrawingFlag(flag) {
        if (flag === true) {
            this.setState({
                drawing: true,
                erasing: false
            })
        } else {
            this.setState({
                drawing: false,
                erasing: false
            })
        }
    }

    setErasingFlag(flag) {
        if (flag === true && this.state.drawing === false) {
            this.setState({
                erasing: true
            })
        } else {
            this.setState({
                erasing: false
            })
        }
    }

    handleKeyChange(event) {
        const newFlag = (event.type === 'keydown');
        switch (event.key) {
            case 'Alt': {
                this.setDrawingFlag(newFlag);
                break;
            }
            case 'Control': {
                this.setErasingFlag(newFlag);
                break;
            }
            default: {
                break;
            }
        }
    }

    render() {
        return (
            <div className={[
                "container",
                this.state.drawing ? "drawing" : "",
                this.state.erasing ? "erasing" : ""
            ].join(" ")}>
                <header className="bar">
                    <h1 className="page-title">Game of Life</h1>
                    <ModeNotification
                        mode="drawing"
                        active={this.state.drawing}
                    />
                    <ModeNotification
                        mode="erasing"
                        active={this.state.erasing}
                    />
                </header>
                <Simulator
                    setCurrentlyDragging={this.setCurrentlyDragging}
                    currentlyDragging={this.state.currentlyDragging}
                    drawing={this.state.drawing}
                    erasing={this.state.erasing}
                />
                <footer className="bar">
                    <div className="footer-contents">
                        <NextIterationButton />
                        <p className="credits">
                            by{" "}
                            <a href="https://robbie.xyz" target="_blank">Robbie Jakob-Whitworth</a>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default GameOfLife;
