import {mergeTypeDefs} from "graphql-tools";
import {productTypeDefs} from "./ProductTypeDefs";

export const rootTypeDefs = mergeTypeDefs([productTypeDefs]);
