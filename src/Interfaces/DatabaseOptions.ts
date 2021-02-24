import { SchemaData } from "./SchemaData";

export interface DatabaseOptions {
    mongoURI: string,
    schemas: Array<SchemaData>
}