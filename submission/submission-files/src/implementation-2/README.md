# Game of Life – Visualisation 2
This implementation of the Game of Life uses React to visualise the Game of Life.

## Quick Start

1. Make sure you're in the `src/implementation-2/` directory.

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
    npm run serve
    ```
   
   > If you want to run on a different port, e.g. 4444, use the following format:
   > ```
   > npm run serve -- -p 4444
   > ```
   
   ...or just open `public/dist/index.html` in your browser from your local filesystem, served over `file:///`.
   
4. Site is now running on [http://localhost:9080](http://localhost:9080)!

## Troubleshooting
### Make sure you're using the right version of node.js
Use node.js **v14.7.0**.

You can use [nvm](https://github.com/nvm-sh/nvm) to install different node.js versions.

### I'm getting `gyp: No Xcode or CLT version detected!`
If you're on macOS Catalina, follow the instructions here to install Xcode command line tools:  
[https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md](https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md)

Note that you might have run `xcode-select --install` already, but node.js doesn't see them. If this is the case, follow
the instructions in the above document.

### Anything else
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
