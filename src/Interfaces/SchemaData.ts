import { Schema } from "mongoose";
export interface SchemaData {
    name: string,
    data: {
        [key: string]: StringConstructor | NumberConstructor | DateConstructor | Buffer | BooleanConstructor | ArrayConstructor | MapConstructor
    }
}