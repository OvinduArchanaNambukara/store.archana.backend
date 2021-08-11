import {mergeResolvers} from "graphql-tools";
import {productResolver} from "./ProductResolver";
import {orderResolver} from "./OrderResolver";

export const rootReducer = mergeResolvers([productResolver, orderResolver]);
