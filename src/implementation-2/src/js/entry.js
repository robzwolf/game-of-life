import '../styles/entry.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import GameOfLife from './react-components/GameOfLife'

ReactDOM.render(<GameOfLife />, document.querySelector('.mount-point'))
