'use strict';

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
//# sourceMappingURL=bundle.js.map
