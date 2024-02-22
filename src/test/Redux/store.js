import { configureStore } from "@reduxjs/toolkit";
import Reducer1 from "./reducer";

const store = configureStore({
  reducer: {
    Reducer1,
  },
});

export default store;
