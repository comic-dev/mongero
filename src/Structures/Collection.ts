import { Model, model, Schema, Document } from "mongoose";
import { SchemaData } from "../Interfaces/SchemaData";
import { DocumentCreateData } from "../Interfaces/DocumentCreateData";
//import { DocumentManager } from "./DocumentManager";

export class Collection {
    //public documents: DocumentManager;

    public model: Model<Document>;

    public data: SchemaData;


    public name: string;

    constructor(data: SchemaData) {
        //this.documents = new DocumentManager(Database);
        this.model = model(data.name, new Schema(data.data));
        this.data = data;
    }


    public async create(Data: DocumentCreateData): Promise<Document> {
        return await new this.model(Data).save()
    }
}