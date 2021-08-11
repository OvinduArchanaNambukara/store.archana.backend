import {Document, model} from "mongoose";
import {AdminSchema} from "../schemas/AdminSchema";

export interface Admin {
  first_name: string
  last_name: string
  email: string
  password: string
}

export interface AdminModel extends Admin, Document {
}

export const AdminModel = model<AdminModel>("admin", AdminSchema);
