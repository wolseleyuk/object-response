export declare class ObjectResponse {
    ok: boolean;
    message: string;
    static get success(): TObjectResponse;
    constructor(ok: boolean, message: string);
    toObject(): TObjectResponse;
}
type TObjectResponse = {
    ok: boolean;
    message: string;
};
export {};
