export class ObjectResponse {
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
//# sourceMappingURL=object-response.js.map