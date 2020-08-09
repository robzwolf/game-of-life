# Game of Life – Visualisation 3
This implementation is not complete. It is a testing ground for experimenting with server-side iteration computation. It
comprises a simple node.js server which uses the `computation-engine.js` used through all three implementations to
simulate translating a glider across the board. 

## Quick Start

1. Make sure you're in the `src/implementation-3/` directory.

2. Run script:
    ```
    node iterate.js
    ```

4. Results are outputted to console.

## Troubleshooting
### Make sure you're using the right version of node.js
Use node.js **v14.7.0**.

You can use [nvm](https://github.com/nvm-sh/nvm) to install different node.js versions.

### I'm getting `gyp: No Xcode or CLT version detected!`
If you're on macOS Catalina, follow the instructions here to install Xcode command line tools:  
[https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md](https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md)

Note that you might have run `xcode-select --install` already, but node.js doesn't see them. If this is the case, follow
the instructions in the above document.
