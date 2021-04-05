import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    search: "",
    forecast: [],
    error: null,
  },
  reducers: {
    handleSearch: (state, action) => {
      state.search = action.payload;
    },
    changeWeather: (state, action) => {
      state.forecast = action.payload;
      state.error = null;
    },
    setError: (state) => {
      state.error = "City not found";
    },
  },
});

export const { handleSearch, changeWeather, setError } = weatherSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

const parseData = (data) => {
  return data.map((it) => {
    const { temp } = it.main;
    return {
      Temperature: temp,
      name: moment.unix(`${it.dt}`).format("llll"),
    };
  });
};
export const getWeather = () => (dispatch, getState) => {
  const store = getState();
  const { search } = store.weather;

  axios(
    `http://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=3131e1d3608908ac0274e35738257a61&units=metric`
  )
    .then(({ data }) => {
      const parsedData = parseData(data.list);
      dispatch(changeWeather(parsedData));
    })
    .catch(() => {
      dispatch(setError());
    });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const weatherSearch = (state) => state.weather.search;
export const forecastSelector = (state) => state.weather.forecast;
export const errorSelector = (state) => state.weather.error;

export default weatherSlice.reducer;
