import { Document } from "mongoose";
import { Database } from "./Database";

export class DocumentManager {
    public Database: Database;

    private documents: Map<string, Document> = new Map();

    constructor(database: Database) {
        this.Database = database;
    }
}