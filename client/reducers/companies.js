'use strict';
const TYPE = 'COMPANIES';
const initiState = {
  items: [],
  fetching: false,
  fetched: false
};

export default function reducer(state = initiState, action) {
  switch(action.type) {
    case `${TYPE}_FETCH`:
      return {...state, fetching: true};
    break;
    case `${TYPE}_FULFILLED`:
      return {...state, fetching: false, items: action.payload};
    break;
    default:
      return state;
  }
}
