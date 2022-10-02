import { createStore } from "redux";
import reducer from "./reducers";

const initialState = { value: 10 };

const store = createStore(reducer, initialState);

export default store;
