# Game of Life – Visualisation 1
## Quick Start

1. Make sure you're in the `src/implementation-1/` directory.

2. Install dependencies:
    ```
    npm install
    ```

2. Build assets:
    ```
    npm run build
    ```
3. Launch a static server:
    ```
    cd public/
    python3 -m http.server
    ```
   
   ...or just open `public/dist/index.html` in your browser from your local filesystem, served over `file:///`.
4. Site is now running on [http://localhost:8000](http://localhost:8000)!

## Troubleshooting
Use node.js v12.13.0.

You can use [nvm](https://github.com/nvm-sh/nvm) to install different node.js versions. 

If something went wrong during the installation process, try cleaning everything:

```
npm run clean
```

Which is the same as removing the `node_modules/` directory and the `public/dist/` directory.

## Local Development
### Asset Watching
You can watch (automatically re-build the assets upon save) with:

```
npm run watch
```

### Linting
This project uses ESLint to enforce good code standards for JavaScript, extending the AirBnB style guide.

```
npm run test
```

...will run ESLint.
