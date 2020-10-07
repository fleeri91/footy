// ----------------------------------------------------------
// Types
// ----------------------------------------------------------
import { 
  IData,
  DataActionTypes,
  CONSTANTS
} from './types'
  
// ----------------------------------------------------------
// Initial State
// ----------------------------------------------------------
const initialState: IData = {
  isFetching: false
};

// ----------------------------------------------------------
// Initial Reducer
// ----------------------------------------------------------
export const dataReducer = (
  state: IData = initialState,
  action: DataActionTypes
) => {
  switch (action.type) {
    case CONSTANTS.FETCHING_DATA:
      return {
        ...state,
        isFetching: true
      };
    default:
     return state;
  }
}