import ffi from "ffi";
import ref from "ref";

const stringPtr = ref.refType(ref.types.CString);

/**
 * @see https://blog.risingstack.com/node-js-native-modules-with-rust/
 */

// @see https://github.com/node-ffi/node-ffi/wiki/Node-FFI-Tutorial#callbacks
// @see https://news.ycombinator.com/item?id=14336140
const init = (library_name, output_fn) => {
    const x = ffi.Library(library_name, {
        smpi_input: [stringPtr, ['string']],
        smpi_start: ['void', ['pointer']],
        smpi_stop: ['void', []],
        smpi_free_string: ['void', [stringPtr]]
    });

    const copyString = (ptr) => {
        // @see https://tootallnate.github.io/ref/#exports-readCString
        const s = ref.readCString(ptr, 0);
        x.smpi_free_string(ptr);
        return s;
    };

    const cbPtr = ffi.Callback('void', [stringPtr], (oRetPtr) => {
        // Note: Strings that originate from Rust must be freed by Rust.
        // - Assumption: Strings that originate from JS are owned and freed by the JS GC.
        const oRet = copyString(oRetPtr);
        output_fn(oRet);
    });
    x.smpi_start(cbPtr);


    // Make an extra reference to the callback pointer to avoid GC.
    process.on('exit', () => {
        cbPtr;
        x.smpi_stop();
    });

    return {
        /**
         * Wrap function to ensure freeing returned string.
         */
        input: (json) => {
            const iRetPtr = x.smpi_input(json);
            const iRet = copyString(iRetPtr);
            return iRet;
        }
    };
};


export {
    init,
}
