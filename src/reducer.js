import {handleActions} from 'redux-actions';

import ActionTypes from './actions';

export const initialState = {
  map: {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 41.838,
      longitude: 1.584,
      zoom: 7.2,
      bearing: 0,
      pitch: 0
    }
  }
};

const updateMapViewport = (state, action) => ({
  ...state,
  map: {
    ...state.map,
    viewport: {
      ...state.map.viewport,
      ...action.payload
    }
  }
});

const reducer = handleActions({
  [ActionTypes.MOVE_MAP]: updateMapViewport,
}, initialState);

export default reducer;
