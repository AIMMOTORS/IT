import { REGISTER_USER, LOGIN_USER } from "../actiontypes/AuthTypes";

const initialState = {
  user: {}
};
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.user,
      };

    case LOGIN_USER:
      return {
        ...state,
        user: action.user,
      };

    default: {
      return state;
    }
  }
}