### Note
- `node-ffi` npm package does not work with Node 12.
    - Error: "node_modules/ref: Command failed"
    
- `https://github.com/neon-bindings/neon`
    - Does support Node 12.
    - Does not currently support:
        - Callbacks triggered many times from the native side.
        - NAPI.
        - These are both in progress.