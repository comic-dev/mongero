import {  SchemaType } from "mongoose";
export interface SchemaData {
    name: string,
    data: {
        [key: string]: SchemaType
    }
}