"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectResponse = void 0;
class ObjectResponse {
    ok;
    message;
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
//# sourceMappingURL=object-response.js.map