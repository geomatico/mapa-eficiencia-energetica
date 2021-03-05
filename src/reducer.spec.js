import ActionTypes from './actions';
import reducer from './reducer';

import {expect} from 'chai';

describe('App reducer', () => {
  it('should update map.viewport on MOVE_MAP', () => {
    // GIVEN
    const givenState = {
      map: {
        viewport: {
          keeps: true,
          replaces: false
        }
      }
    };

    const givenAction = {
      type: ActionTypes.MOVE_MAP,
      payload: {
        replaces: true,
        adds: true
      }
    };

    // WHEN
    const computedState = reducer(givenState, givenAction);

    // THEN
    const expectedState = {
      map: {
        viewport: {
          keeps: true,
          replaces: true,
          adds: true
        }
      }
    };

    expect(computedState).to.deep.equal(expectedState);
  });
});
