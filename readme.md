### SMPI IOP for Node.

- IOP = Input Output Provider.

- Used to test `sqlite-mpi-client-js` from the CLI.
    - Allows fast iteration of testing between the JS client and FFI binary. 
    
- Bundles SQLite MPI binary.
    - Currently only supports Mac OS.

### Example usage:

```js
const iop = require("smpi-iop-node-ffi");
const {smpi}= require("sqlite-mpi-client-js");
const client = smpi.newClient(iop);
```

See https://github.com/sqlite-mpi/sqlite-mpi-client-js/tree/master/test for detailed examples.
