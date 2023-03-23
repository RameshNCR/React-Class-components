import { createStore } from "redux";
import Counter from "./Reducers/Counter";

export const store = createStore(Counter);