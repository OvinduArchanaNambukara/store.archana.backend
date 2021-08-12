import {mergeResolvers} from "graphql-tools";
import {productResolver} from "./ProductResolver";
import {orderResolver} from "./OrderResolver";
import {userResolver} from "./UserResolver";

export const rootReducer = mergeResolvers([productResolver, orderResolver, userResolver]);
