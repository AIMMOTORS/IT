import { DATA_DETAILES_TYPE } from "../actiontypes/DataTypes";
import { BIKE_DETAILES_TYPE } from "../actiontypes/DataTypes";
import { PROFILE_DETAILES_TYPE } from "../actiontypes/DataTypes";

export const get_data_action = (data) => dispatch => {
      dispatch({ type: DATA_DETAILES_TYPE, userdata: data });
}

export const get_bike_data = (data) => dispatch => {
      dispatch({ type: BIKE_DETAILES_TYPE, bikedata: data });
}

export const get_profile_data = (data) => (dispatch) => {
      dispatch({ type: PROFILE_DETAILES_TYPE, profiledata: data });
    };