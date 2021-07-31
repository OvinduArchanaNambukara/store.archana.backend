import {mergeTypeDefs} from "graphql-tools";
import {productTypeDefs} from "./productTypeDefs";

export const typeDefs = mergeTypeDefs([productTypeDefs]);
