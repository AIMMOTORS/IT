import { ADD_BIKE } from "../actiontypes/BikeTypes";

const initialState = {
    bikeList: []
};

export default function BikeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BIKE:
      console.log("action for store update Bikelist",action.data)
      return {
        ...state,
        bikeList: [...state.bikeList,action.data]
      };

    default: {
      return state;
    }
  }
}