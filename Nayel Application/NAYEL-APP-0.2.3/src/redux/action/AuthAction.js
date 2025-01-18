import { REGISTER_USER, LOGIN_USER } from "../actiontypes/AuthTypes";

export const registerUser = (data) => dispatch => {
    dispatch({ type: REGISTER_USER, user: data });
}

export const loginUser = (data) => dispatch => {
    dispatch({ type: LOGIN_USER, user: data });
}