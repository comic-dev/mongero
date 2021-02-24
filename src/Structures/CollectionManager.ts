import { SchemaData } from "../Interfaces/SchemaData";
import { Collection } from "./Collection";
export class CollectionManager {
    private collections: Map<string, Collection> = new Map();

    constructor(schemas: Array<SchemaData>){
        schemas.map((v) => { 
            this.collections.set(v.name, new Collection(v)) 
            console.log(this);
        });
    }

    public get(Schema: string): Collection {
        return this.collections.get(Schema);
    }
}