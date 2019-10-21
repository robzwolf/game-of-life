# Literature Survey (Draft)
by [Robbie Jakob-Whitworth](https://robbie.xyz), L3 [Natural Sciences](https://www.dur.ac.uk/natural.sciences/) at [Durham University](https://www.dur.ac.uk/).

_This document is still very much a draft, and at this stage is more an outline of what this document will eventually look like._

## Sections
### Definitions
We need to define the following to enable us to complete the literature survey:

- [Conway's `Game of Life`](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- What `at scale` could mean, in the sense of simulating the Game of Life in the browser
- What `performant` could mean, in the sense of simulating the Game of Life in the browser
- `Turing machine` / what it means to be `Turing complete`, as an aside (this is not particularly relevant to the core content of this project)

### Existing Implementations
Summary of existing implementations out there on the web – doing a simple Google search for `game of life implementation` or similar is probably a great way to start this.

### Why the Game of Life is interesting(?)
Talk about Turing machines and completeness etc.

Not super relevant to the rest of the project though, this section would be more of an aside.

### Doing all Simulation Client-Side
Talk about how a full simulation of the Game of Life might work in an entirely client-side implentation.

### Doing the Heavy-Lifting Server-Side
Talk about how having a backend server doing the actual calculation and simulation, and then just sending relevant information to the browser, might work.

Could talk a bit about different diffing algorithms, like React's [reconciliation](https://reactjs.org/docs/reconciliation.html).

### Relevant Links
**JavaScript is Turing Complete**  
https://www.freecodecamp.org/news/javascript-is-turing-complete-explained-41a34287d263/  
_Broad description of what it means to be Turing complete_

**Reconciliation – React**  
https://reactjs.org/docs/reconciliation.html  
_Documention on how React's diffing algorithms_

**A Turing Machine In Conway's Game Of Life**  
https://www.ics.uci.edu/~welling/teaching/271fall09/Turing-Machine-Life.pdf  
_Implementation of a Turing machine in Conway's Game of Life_

**Game of Life Cellular Automata**  
https://link.springer.com/book/10.1007%2F978-1-84996-217-9  
_Comprehensive investigation of gliders, complexity and different applications of Game of Life_

**Synchronous versus asynchronous updating in the 'Game of Life'**  
https://journals.aps.org/pre/abstract/10.1103/PhysRevE.59.3876  
_An implementation where only a random fraction of sites are to be updated on each iteration of the game._

**The Game of Life: Universality Revisited**  
https://link.springer.com/chapter/10.1007/978-94-015-9153-9_2  
_Explanation of different applications of Turing completeness (boolean circuits etc.) within the Game of Life_

**Mathematical Games – The fantastic combinations of John Conway's new solitaire game "life"**  
https://www.jstor.org/stable/24927642?seq=4#metadata_info_tab_contents
_Original Scientific American article that popularised the Game of Life (October 1970)_

**Mathematical Games – On cellular automata, self-reproduction, the Garden of Life and the game "life"**  
https://www.jstor.org/stable/24927730  
_Second Scientific American article about the Game of Life (February 1971)_

