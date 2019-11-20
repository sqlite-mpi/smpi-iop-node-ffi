### SMPI IOP for Node.

- IOP = Input Output Provider.

- Used to test `sqlite-mpi-client-js` from the CLI.
    - Allows fast iteration of testing between the JS client and FFI binary. 
    
- Bundles SQLite MPI binary.
    - Currently only supports Mac OS.

### License note
    
- The source code that produced the binaries at `./src/cdylib/*` is proprietary and closed source.
    - A perpetual license for the source code can be arranged for a small fee, please contact emadda.dev@gmail.com.

- The release binaries (`./src/cdylib/*`) themselves are licensed under MIT.
            

### Example usage:

```js
const iop = require("smpi-iop-node-ffi");
const {smpi}= require("sqlite-mpi-client-js");
const client = smpi.newClient(iop);
```

See https://github.com/sqlite-mpi/sqlite-mpi-client-js/tree/master/test for detailed examples.
