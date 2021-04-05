import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import {
  handleSearch,
  weatherSearch,
  getWeather,
} from "./features/counter/weatherSlice";
import Button from "@material-ui/core/Button";

const Input = () => {
  const city = useSelector(weatherSearch);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: 'flex-end' }}>
      <div style={{ marginRight: "1rem" }}>
        <TextField
          id="outlined-basic"
          label="Your city"
          variant="outlined"
          value={city}
          onChange={(e) => {
            dispatch(handleSearch(e.target.value));
          }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => {
            dispatch(getWeather());
          }}
        >
          Search
        </Button>
        <div> </div>
      </div>
    </div>
  );
};

export default Input;
