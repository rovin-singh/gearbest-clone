import {
	LOGIN_ERROR,
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGOUT,
	SIGNUP,
} from "./auth.types";
import axios from "axios";
import { URL } from "../../API/connect";
export const signup = (formdata) => (dispatch) => {
	console.log(formdata);
	return axios
		.post(`${URL}/user/signup`, {
			...formdata,
		})
		.then((res) => {
			alert(res.data.msg);
		})
		.catch((e) => {
			console.log(e);
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
