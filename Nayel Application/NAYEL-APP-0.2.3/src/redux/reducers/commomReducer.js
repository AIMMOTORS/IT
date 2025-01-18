import { COLOR_PICKER_SET} from "../actiontypes/CommonTypes";
const initialState = {
  colorrdata:[]
};
export default function commomReducer(state = initialState, action) {
  console.log('action types are',action.type);
  console.log('see my actions',action)
  switch (action.type) {
    case COLOR_PICKER_SET:
      return {
        ...state,
        colorrdata: action.colorrdata,
      };
  
    default: {
      return state;
    }
  }
}