### SMPI IOP for Node.

- IOP = Input Output Provider.

- Used to test `sqlite-mpi-client-js` from the CLI.
    - Allows fast iteration of testing between the JS client and FFI binary. 
    
- Bundles SQLite MPI binary.
    - Currently only supports Mac OS.

### License note
    
The shared library binaries (`./src/cdylib/*`) included in this repo are MIT licensed, but the source code that produced them is closed and proprietary.

A perpetual license for the source code can be arranged for a small fee, please contact emadda.dev@gmail.com.

See https://sqlitempi.com/license for more details.

### Example usage:

```js
const iop = require("smpi-iop-node-ffi");
const {smpi}= require("sqlite-mpi-client-js");
const client = smpi.newClient(iop);
```

See https://github.com/sqlite-mpi/sqlite-mpi-client-js/tree/master/test for detailed examples.
