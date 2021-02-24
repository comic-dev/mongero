import { CollectionManager } from "./CollectionManager";
import { DatabaseOptions } from "../Interfaces/DatabaseOptions";
import { connect } from "mongoose";
import { SchemaData } from "../Interfaces/SchemaData";
import { DocumentManager } from "./DocumentManager";
export class Database {
    public collections: CollectionManager;
    public documents: DocumentManager;

    public schemas: Array<SchemaData>;

    constructor(Options: DatabaseOptions) {
        connect(Options.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.schemas = Options.schemas;
        this.collections = new CollectionManager(this.schemas);
        this.documents = new DocumentManager(this);
    }
}