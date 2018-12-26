import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // restruct a map, outter key is id, inner key ..._.mapKeys()
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
    // only one stream
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
    // newState[action.payload.id] = action.payload; return newState;
      return { ...state, [action.payload.id]: action.payload };   // es 2015
    case DELETE_STREAM:
    // payload is id in this case,  drop something
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
