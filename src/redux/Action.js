import { GET_API } from "../service/Get_Api";
import * as actions from "./ActionType";

export const getData = (url) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    try {
      const res = await GET_API(url);
      const data = res.data.hits;

      dispatch({ type: actions.GET_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};
