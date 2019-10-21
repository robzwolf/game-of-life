# Project Plan (Draft)

## Overview
- Implementation and visualisation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- Consideration of performance issues of Game of Life at scale
- Being smart about rendering, e.g. only rendering changes rather than re-rendering the entire visualisation on each iteration (a bit like [how React uses diffing algorithms](https://reactjs.org/docs/reconciliation.html))
- Maybe make GoL into a two-player game by having clients take turns to access the game for writing

## Research Question
_To what extent is it better to have web browsers simulate Conway's Game of Life client-side versus having it be computed server-side?_
 > needs to more easily/reliably evaluated
 
 
Thoughts – could this research question be modified to better reflect implementations of different types, e.g. only rendering differences in the browser, only telling the client's browser about the changes, etc?

## Deliverables

> Do you want to visualise all generations? Tradeoff between size of image and #iterations


### Basic

- Use **several** different techniques to implement Conway's Game of Life such that it is performant on a **range of browsers** 
- **Analyse** and **evaluate** the performance of this implementation, **suggesting possible improvements**

> tables with and without pre-sizing, DOM/CSS, react vDOM, canvas, SVG


### Intermediate

- **Analyse** and **evaluate** each technique, **in detail**, suggesting improvements **for each**
- **Compare** the performance of each implementation across **different devices** with different **levels of computing power**

> Make client/server
> Change what we send (whole picture/diffs)
> Change how we send it (AJAX/WebSockets)

### Advanced
- Use **several** different techniques to implement Conway's Game of Life such that a **minimum level of performance is achieved** on all devices above some **reasonable threshold of computing power**
- **Analyse** and **evaluate** each technique, in detail, with a **comprehensive** set of criticism and improvements for each
- **Compare** the performance of each implementation across different devices with different levels of computing power
- Implement a way of **dynamically selecting** which implementation to use in the browser, **based** on the user's device's computing power

> Try to identify periodic behaviour in sub-sections of the game, with hashing?
> Something on divide/conquer, maybe multi-thread for node


## Notes
- Need to define what `at scale` could mean, e.g. `1000`x`1000` blocks? `10000`x`10000`? `100`x`100`?
- What's `computing power` and how do we measure it?
- We've talked about a `reasonable threshold of computing power`. What would this threshold be?

