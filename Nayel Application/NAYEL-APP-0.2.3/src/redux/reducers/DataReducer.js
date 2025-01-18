// DataReducer.js
import { DATA_DETAILES_TYPE, BIKE_DETAILES_TYPE, PROFILE_DETAILES_TYPE } from "../actiontypes/DataTypes";

const initialState = {
  userdata: [],
  bikedata: [],
  profiledata: [],
};

export default function DataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_DETAILES_TYPE:
      return {
        ...state,
        userdata: action.userdata,
      };

    case BIKE_DETAILES_TYPE:
      return {
        ...state,
        bikedata: action.bikedata,
      };

    case PROFILE_DETAILES_TYPE:
      return {
        ...state,
        profiledata: action.profiledata,
      };

    default: {
      return state;
    }
  }
}
