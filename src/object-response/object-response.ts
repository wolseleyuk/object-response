export class ObjectResponse {

    ok: boolean;
    message: string;

    static get success(): TObjectResponse {
        return new ObjectResponse(true, "Completed successfully").toObject();
    }

    constructor(ok: boolean, message: string) {
        this.ok = ok;
        this.message = message;
    }

    public toObject(): TObjectResponse {
        return {
            ok: this.ok,
            message: this.message
        };
    }
}

type TObjectResponse = {
    ok: boolean;
    message: string;
};