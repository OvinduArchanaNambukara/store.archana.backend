import {mergeTypeDefs} from "graphql-tools";
import {productTypeDefs} from "./ProductTypeDefs";
import {orderTypeDefs} from "./OrderTypeDefs";
import {userTypeDefs} from "./UserTypeDefs";

export const rootTypeDefs = mergeTypeDefs([productTypeDefs, orderTypeDefs, userTypeDefs]);
