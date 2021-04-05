import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import weatherReducer from "../features/counter/weatherSlice";

export default configureStore({
  reducer: {
    // counter: counterReducer,
    weather: weatherReducer,
  },
});
