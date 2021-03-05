import keyMirror from 'keymirror';
import {createAction} from 'redux-actions';

const ActionTypes = keyMirror({
  MOVE_MAP: null
});

export default ActionTypes;

export const moveMap = createAction(ActionTypes.MOVE_MAP);
