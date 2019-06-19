import { FETCH, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null

  // Array characters, Boolean fetching, null error.
};
const charsReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH:
      return{
        ...state,
        fetching: true,
        error: '',
      };
    case SUCCESS: 
      return{
        ...state,
        fetching: false,
        characters: action.payload
      }
    case FAILURE: 
      return{
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
export default charsReducer;