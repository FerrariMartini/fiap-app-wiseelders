import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import {GET_EXECUTIVE_SUMMARY_SUCCESS} from '../actions/actionTypes';

const initialState = {
    value: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXECUTIVE_SUMMARY_SUCCESS:
            return updateObject(state, {
                value: action.executiveSummary.value
            });
        default:
            return state;
    }
};

export default reducer;
