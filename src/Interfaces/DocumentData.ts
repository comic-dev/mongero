import { Types } from "mongoose";
import { Database } from "../Structures/Database";

export interface DocumentData {
    Database: Database;
    _id: Types.ObjectId,
    [key: string]: any
}