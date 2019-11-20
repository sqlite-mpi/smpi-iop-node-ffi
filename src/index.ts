import * as iop from "./lib/iop-ffi-string";

const lib = `${__dirname}/cdylib/libsmpi_iop_ffi`;

const init = (o) => {
    return iop.init(lib, o);
};

export {
    init
}
