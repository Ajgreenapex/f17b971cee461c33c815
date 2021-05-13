import * as actions from "./ActionType";
const initialState = {
  paginationData: [],
  loading: false,
  error: null,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        paginationData: state.paginationData.concat(action.payload),
      };
    case actions.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
