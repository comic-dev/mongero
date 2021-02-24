import { ObjectId } from "mongoose";
import { Database } from "../Structures/Database";

export interface DocumentData {
    Database: Database;
    _id: ObjectId,
    [key: string]: any
}