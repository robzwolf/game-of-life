# Game of Life
**Level 3 Computer Science project at [Durham University](https://www.dur.ac.uk/computer.science/), by [Robbie Jakob-Whitworth](https://robbie.xyz).**

This project is about investigating different techniques for visualising and simulating [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

For further details about objectives, deliverables, and the research question, see the [Project Plan](Documents/Source/Project%20Plan.md).

## Quick Start
### Implementation 1 (Vanilla JS)
See [src/implementation-1/README.md](src/implementation-1/README.md).

### Implementation 2 (React)
See [src/implementation-2/README.md](src/implementation-2/README.md).

## Documents
Relevant documents are stored in both formats in this repository:
- An editable source
- A final, published PDF

Editable documents are stored in [Documents/Source](Documents/Source).

Final, published files are stored in [Documents/Final](Documents/Final).

Relevant documents are as follows:


|File        |Editable File        |Published File       |
|------------|---------------------|---------------------|
|Project Plan |[Project Plan.md](Documents/Source/Project%20Plan.md) |[Project Plan.pdf](Documents/Final/Project%20Plan.pdf)|
|Literature Survey|[Literature Survey (Google Docs)](https://docs.google.com/document/d/1f3Qgao7WAvY9Of11-YSw6nsAx21ldypqUjD4GKeCy3w/edit#heading=h.mtt16cyvjg30)|[Literature Survey.pdf](Documents/Final/Literature%20Survey.pdf)|
|Final Report |[Final Report (Google Docs)](https://docs.google.com/document/d/1_Y9BfHVNBwC0ZT2fC5gldjIyDd4Ca2r6QnUqsPm2-vQ/edit#)| —|

### Converting a Document from GitHub-Flavoured Markdown to PDF
The following slightly convoluted steps produce a clean PDF from a GitHub-flavoured markdown file.

1. Open the markdown file in [Atom](https://atom.io/), a free text editor.
2. Once in Atom, open a preview of the markdown file by pressing `Ctrl`+`Shift`+`M`.
    > This is the same key combination on both Windows and macOS.
3. With the focus on the preview window, save the preview as an HTML file.
    > `⌘`+`Shift`+`S`
4. Open the saved HTML file in Google Chrome, and use its `Save as PDF` feature.
    > Set the scale to `70%` for optimum, consistent visual results.

### Meeting Notes
For each meeting with the supervisor, copy the file [Documents/Meeting Notes/TEMPLATE.md](Documents/Meeting%20Notes/TEMPLATE.md) and save it as a new file, with the date of the meeting in ISO8601 format (e.g. 2019-12-25).

Meeting notes can be found in the [Documents/Meeting Notes](Documents/Meeting%20Notes) directory.

## Deploy Previews
Check the issues tab on [GitHub](https://github.com/robzwolf/game-of-life) to find preview URLs for each
relevant branch.

### Adding a New Preview URL for a New Branch
If creating a new branch, e.g. `feature/zeroth-implementation`, add the following to the `netlify.toml` file **on**
**the `master` branch of this repo**.

```
[context."feature/zeroth-implementation"]  # Contains the branch name
    base = "src/implementation-0/"         # The directory for that implementaiton
    publish = "public/"                    # The directory to publish, relative to the base directory
    command = "npm i && npm run build"     # Build command to run, in the base directory
```

Netlify will then automatically pick up the new branch upon push and will deploy it.

You should manually add a new issue to GitHub with the `preview-url` label and a link to the preview URL for that branch.
