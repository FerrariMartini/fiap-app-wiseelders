import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {loading: false};

const loading = (state) => updateObject(state, {loading: true});

const notLoading = (state) => updateObject(state, {loading: false});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
