import { combineReducers } from "redux";
import productArray from "./productR";
import addToCart from "./Addtocart";
import auth from "./Auth"
import userData from "./userData";
const rootReducer = combineReducers({

    productArray,
    addToCart,
    auth,
    userData
});

export default rootReducer;
