import {mergeTypeDefs} from "graphql-tools";
import {productTypeDefs} from "./ProductTypeDefs";
import {orderTypeDefs} from "./OrderTypeDefs";

export const rootTypeDefs = mergeTypeDefs([productTypeDefs, orderTypeDefs]);
