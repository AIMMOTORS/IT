import { ADD_BIKE } from "../actiontypes/BikeTypes";

export const addBike = (data) => dispatch => {
    dispatch({ type: ADD_BIKE, data: data });
}
