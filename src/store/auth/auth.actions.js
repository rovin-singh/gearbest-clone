import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
} from "./auth.types";
import axios from "axios";
export const signup = (formdata) => (dispatch) => {
  return axios
    .post("http://localhost:8000/users", {
      ...formdata,
    })
    .then((res) => {
      window.location.reload(false);
    });
};
export const loginReq =
  ({ email, password }) =>
  (dispatch) => {
    // loading
    dispatch({ type: LOGIN_LOADING });
    // success
    console.log("login", email, password);
    axios({
      url: `http://localhost:8000/users?email=${email}&password=${password}`,
      method: "GET",
    })
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data[0].email);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { token: "QpwL5tke4Pnpja7X4", name: res.data[0].email },
          });
        }
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
export const logoutReq = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
