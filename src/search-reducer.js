const SEARCH_INPUT = "SEARCH_INPUT";

const initialState = {
  search: "",
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case SEARCH_INPUT:
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
}

export const searchInput = (search) => {
  console.log(search);
  return { type: SEARCH_INPUT, search };
};
