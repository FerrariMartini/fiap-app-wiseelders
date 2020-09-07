import {updateObject} from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    entries: []
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.GET_ACTIVITIES_SUCCESS:
            return updateObject(state, {
                entries: action.entries
            });
        default:
            return state;
    }
};

export default reducer;
