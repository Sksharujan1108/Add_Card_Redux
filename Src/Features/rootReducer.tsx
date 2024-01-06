import { combineReducers } from "redux";
import AddSlice from "./Slices/AddSlice";

const rootReducer = combineReducers ({
    menu: AddSlice.reducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;