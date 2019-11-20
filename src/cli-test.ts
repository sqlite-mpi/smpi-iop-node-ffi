import * as smpiIOP from "./index";

const o = (oRet) => {
    console.log(JSON.parse(oRet));
};

const ffi = smpiIOP.init(o);

let wtx = {
    "id": "4b65d32e-6486-4b4b-9b9c-564c3b9c447e",
    "fn": "file/get_write_tx",
    "args": {
        "file": "/tmp/ts-test.sqlite3"
    }
};

let rtx = {
    "id": "c35eb4d5-aab3-46aa-999f-82107d1d3639",
    "fn": "file/get_read_tx",
    "args": {
        "file": "/tmp/ts-test.sqlite3"
    }
};


console.log(ffi.input(JSON.stringify(wtx)));
console.log(ffi.input(JSON.stringify(rtx)));
console.log(ffi.input(JSON.stringify(rtx)));
console.log(ffi.input(JSON.stringify(rtx)));

// Wait for responses
setTimeout(() => {
}, 1000);
