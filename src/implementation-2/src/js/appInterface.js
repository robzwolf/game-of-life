import Helpers from './helpers'

class AppInterface {
  constructor(body) {
    // Initialise variables
    this.body = body

    // Bindings
    // See https://stackoverflow.com/a/31368520/2176546
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.setDrawingFlag = this.setDrawingFlag.bind(this)
    this.setErasingFlag = this.setErasingFlag.bind(this)
  }

  setupKeyListeners() {
    this.body.addEventListener('keydown', this.handleKeyDown)
    this.body.addEventListener('keyup', this.handleKeyUp)
  }

  handleKeyDown(event) {
    switch (event.key) {
      case 'Alt': {
        this.setDrawingFlag(true)
        break
      }
      case 'Control': {
        this.setErasingFlag(true)
        break
      }
      default: {
        break
      }
    }
  }

  handleKeyUp(event) {
    switch (event.key) {
      case 'Alt': {
        this.setDrawingFlag(false)
        break
      }
      case 'Control': {
        this.setErasingFlag(false)
        break
      }
      default: {
        break
      }
    }
  }

  setDrawingFlag(flag) {
    if (flag === true) {
      this.body.classList.add('drawing')
      this.body.classList.remove('erasing')
    } else {
      this.body.classList.remove('drawing')
    }
  }

  setErasingFlag(flag) {
    if (flag === true && !Helpers.isDrawing(this.body)) {
      this.body.classList.add('erasing')
    } else {
      this.body.classList.remove('erasing')
    }
  }

  /**
   * Stops the right-click menu appearing when drawing using Ctrl on a Mac
   */
  disableRightClick() {
    this.body.ownerDocument.addEventListener(
      'contextmenu',
      Helpers.eventPreventDefault,
    )
  }
}

export default AppInterface
