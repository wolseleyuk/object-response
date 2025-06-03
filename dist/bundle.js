(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ObRe = {}));
})(this, (function (exports) { 'use strict';

    class ObjectResponse {
        static get success() {
            return new ObjectResponse(true, "Completed successfully").toObject();
        }
        constructor(ok, message) {
            this.ok = ok;
            this.message = message;
        }
        toObject() {
            return {
                ok: this.ok,
                message: this.message
            };
        }
    }

    exports.ObjectResponse = ObjectResponse;

}));
//# sourceMappingURL=bundle.js.map
