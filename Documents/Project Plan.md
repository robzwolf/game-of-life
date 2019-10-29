# Project Plan (Draft)

## Overview
- Implementation and visualisation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- Implement a selection of different technical approaches for simulating the Game
- Being smart about rendering, e.g. only rendering changes rather than re-rendering the entire visualisation on each iteration (a bit like [how React uses diffing algorithms](https://reactjs.org/docs/reconciliation.html))
- Maybe make GoL into a two-player game by having clients take turns to access the game for writing

## Research Question
What is the best technique for implementing a Game of Life simulation in a web browser?

## Deliverables
### Basic

- Use **several** different techniques to implement a frontend simulation of Conway's Game of Life such that it is performant on a **range of browsers**:
    - Tables
    - Simple `<div>`s
    - React virtual DOM
    - HTML5 canvas
    - SVG
- **Analyse** and **evaluate** the performance of each implementation, **suggesting possible improvements for each**


### Intermediate
As above, and:

- Use a **client/server architecture** where the server is responsible for computing each iteration of the Game
- Use different techniques to implement **what** we send:
    - Do we send the whole state on each iteration?
    - Do we just send the changes between iteration?
- Use different techniques to change **how** we send iterations:
    - AJAX with long polling
    - WebSockets

### Advanced
As above, and:

- **Intelligently** compute each iteration of the Game:
    - Avoid calculating the next iteration for **regions that are completely empty** (as these will not change on that iteration), taking care to respect possible changes at the boundaries of these regions
    - Try to **identify periodic regions of the Game using hashing** and record these to **avoid having to periodically recompute** these regions
- **Investigate** the feasibility of using **multi-threading** to compute different regions of the Game
- Try to build a **two-player game** by leveraging the client/server architecture
    - One player has to **build** the biggest, most complex structures possible
    - The other has to try to **destroy** everything the first player creates
